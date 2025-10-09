const express = require("express");
const xlsx = require("xlsx");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

const ATTENDANCE_DIR = path.join(__dirname, "attendance_files");

// --- Helper Functions ---
const toMinutes = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
};
const calculateHours = (start, end) =>
    ((toMinutes(end) - toMinutes(start)) / 60).toFixed(2);

const getDateFromFilename = (filename) => {
    const match = filename.match(/attendance_(\d{4}-\d{2}-\d{2})\.xlsx/);
    return match ? match[1] : null;
};

// --- Process a Single File ---
function processFile(filePath, fileDate) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const grouped = {};
    data.forEach((row) => {
        const key = `${row.emp_id}-${row.date}`;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(row);
    });

    const result = [];

    for (const key in grouped) {
        const records = grouped[key];
        const emp_id = records[0].emp_id;
        const name = records[0].name;

        const firstLogin = records.reduce(
            (min, r) => (toMinutes(r.login_time) < toMinutes(min) ? r.login_time : min),
            records[0].login_time
        );
        const lastLogout = records.reduce(
            (max, r) => (toMinutes(r.logout_time) > toMinutes(max) ? r.logout_time : max),
            records[0].logout_time
        );

        const spendHrs = parseFloat(calculateHours(firstLogin, lastLogout));
        const status = spendHrs < 8 ? "Leave" : "Present";

        result.push({ emp_id, name, date: fileDate, spendHrs, status });
    }

    return result;
}

// --- Main API ---
app.get("/attendance", (req, res) => {
    const days = parseInt(req.query.days) || 7;
    const today = new Date();

    const files = fs
        .readdirSync(ATTENDANCE_DIR)
        .filter((f) => f.startsWith("attendance_") && f.endsWith(".xlsx"));

    const allData = [];

    files.forEach((file) => {
        const dateStr = getDateFromFilename(file);
        if (!dateStr) return;

        const fileDate = new Date(dateStr);
        const diffDays = (today - fileDate) / (1000 * 60 * 60 * 24);

        if (diffDays <= days) {
            const filePath = path.join(ATTENDANCE_DIR, file);
            allData.push(...processFile(filePath, dateStr));
        }
    });

    // --- Aggregate per Employee ---
    const summary = {};
    allData.forEach((entry) => {
        if (!summary[entry.emp_id]) {
            summary[entry.emp_id] = {
                emp_id: entry.emp_id,
                name: entry.name,
                attendance: {},
                presentDays: 0,
                leaveDays: 0,
                totalDays: 0,
            };
        }

        summary[entry.emp_id].attendance[entry.date] = {
            status: entry.status,
            hours: entry.spendHrs,
        };

        summary[entry.emp_id].totalDays++;
        if (entry.status === "Present") summary[entry.emp_id].presentDays++;
        else summary[entry.emp_id].leaveDays++;
    });

    res.json(Object.values(summary));
});

app.listen(PORT, () =>
    console.log(`✅ Attendance server running on http://localhost:${PORT}`)
);
