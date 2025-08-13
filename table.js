import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DeployMergedTable() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);

    // Mapping dictionaries for ID → Label
    const dmdTypeMap = {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
        5: "E",
        6: "F"
    };

    const selectedRuleMap = {
        1: "subhrajit",
        2: "barman",
        3: "kabaita",
        4: "roy",
        5: "rachana",
        6: "moumita"
    };

    // Helper to handle arrays, comma-separated strings, numbers
    const formatIds = (value, map) => {
        if (Array.isArray(value)) {
            return value.map(id => map[Number(id)] || id).join(", ");
        }
        if (typeof value === "string" && value.includes(",")) {
            return value
                .split(",")
                .map(id => map[Number(id.trim())] || id.trim())
                .join(", ");
        }
        return map[Number(value)] || value;
    };

    // Fetch and format data
    const fetchSummary = async () => {
        try {
            setLoading(true);
            const res = await axios.get("http://localhost:8080/deploy-summary");

            const formatted = (res.data || []).map(row => ({
                ...row,
                dmdtype: formatIds(row.dmdtype, dmdTypeMap),
                selectedRule: formatIds(row.selectedRule, selectedRuleMap),
                locationId: Array.isArray(row.locationId)
                    ? row.locationId.join(", ")
                    : row.locationId,
                locationPriority: Array.isArray(row.locationPriority)
                    ? row.locationPriority.join(", ")
                    : row.locationPriority
            }));

            setRows(formatted);
        } catch (e) {
            console.error(e);
            alert("Failed to load summary.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSummary();
    }, []);

    return (
        <div style={{ padding: 16 }}>
            <h3>Deploy Summary Table</h3>

            <button
                onClick={fetchSummary}
                disabled={loading}
                style={{ marginBottom: 12 }}
            >
                {loading ? "Loading..." : "Reload"}
            </button>

            <table
                border="1"
                cellPadding="8"
                style={{ borderCollapse: "collapse", minWidth: 900 }}
            >
                <thead>
                    <tr>
                        <th>Priority</th>
                        <th>DMD Type</th>
                        <th>Location ID</th>
                        <th>Location Priority</th>
                        <th>Selected Rule</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.length > 0 ? (
                        rows.map((row, index) => (
                            <tr key={index}>
                                <td>{row.priority}</td>
                                <td>{row.dmdtype}</td>
                                <td>{row.locationId}</td>
                                <td>{row.locationPriority}</td>
                                <td>{row.selectedRule}</td>
                                <td>{row.endDate}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" style={{ textAlign: "center", color: "#666" }}>
                                No data available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/** Debug: Uncomment to see incoming data */}
            {/* <pre>{JSON.stringify(rows, null, 2)}</pre> */}
        </div>
    );
}
