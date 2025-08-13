package com.JAVA_CURD.employee.service;

import com.JAVA_CURD.employee.model.DeploySummaryDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DeploySummaryService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<DeploySummaryDTO> getMergedSummary() {

        String sql = """
                                   SELECT
                    rpdp.deployprofileid,
                    (
                        SELECT STRING_AGG(DISTINCT rpdp_inner.priority_dur::TEXT, ', ')
                        FROM rp_deploy_profile rpdp_inner
                        WHERE rpdp_inner.deployprofileid = rpdp.deployprofileid
                    ) AS priority,
                    (
                        SELECT STRING_AGG(DISTINCT dpc.dmd_type::TEXT, ', ')
                        FROM rp_dmd_pty_config dpc
                        JOIN rp_deploy_profile rpdp_inner ON rpdp_inner.dmd_pty_config = dpc.dmd_pty_config
                        WHERE rpdp_inner.deployprofileid = rpdp.deployprofileid
                    ) AS dmdtype,
                    (
                        SELECT STRING_AGG(DISTINCT rps.location_id, ', ')
                        FROM rp_sku_replan_param rps
                        WHERE rps.deployprofileid = rpdp.deployprofileid
                    ) AS location_id,
                    (
                        SELECT STRING_AGG(DISTINCT bl.loc_priority::TEXT, ', ')
                        FROM rp_sku_replan_param rps
                        JOIN bl_location bl ON rps.location_id = bl.location_id
                        WHERE rps.deployprofileid = rpdp.deployprofileid
                    ) AS locationpriority,
                    (
                        SELECT STRING_AGG(DISTINCT rpdp_inner.deployrule, ', ')
                        FROM rp_deploy_profile rpdp_inner
                        WHERE rpdp_inner.deployprofileid = rpdp.deployprofileid
                    ) AS selected_rule,
                    (
                        SELECT STRING_AGG(DISTINCT TO_CHAR(rps.plan_date, 'YYYYMMDD'), ', ')
                        FROM rp_sku_replan_param rps
                        WHERE rps.deployprofileid = rpdp.deployprofileid
                    ) AS end_date
                FROM rp_deploy_profile rpdp
                GROUP BY rpdp.deployprofileid
                ORDER BY rpdp.deployprofileid;
                                """;

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql);
        List<DeploySummaryDTO> results = new ArrayList<>();

        for (Map<String, Object> row : rows) {
            DeploySummaryDTO dto = new DeploySummaryDTO();

            dto.setPriority(getString(row.get("priority")));
            dto.setDmdtype(getString(row.get("dmdtype")));
            dto.setLocationId(getString(row.get("location_id")));
            dto.setLocationPriority(getString(row.get("locationpriority")));
            dto.setSelectedRule(getString(row.get("selected_rule")));
            dto.setEndDate(getString(row.get("end_date")));

            results.add(dto);
        }

        return results;
    }

    private String getString(Object value) {
        return value != null ? value.toString() : "";
    }

    private void padFields(DeploySummaryDTO dto) {
        List<String> priorityList = split(dto.getPriority());
        List<String> dmdtypeList = split(dto.getDmdtype());
        List<String> locationIdList = split(dto.getLocationId());
        List<String> locationPriorityList = split(dto.getLocationPriority());
        List<String> selectedRuleList = split(dto.getSelectedRule());
        List<String> endDateList = split(dto.getEndDate());

        int maxSize = Math.max(locationIdList.size(),
                Math.max(priorityList.size(), dmdtypeList.size()));

        pad(priorityList, maxSize);
        pad(dmdtypeList, maxSize);
        pad(locationIdList, maxSize);
        pad(locationPriorityList, maxSize);
        pad(selectedRuleList, maxSize);
        pad(endDateList, maxSize);

        dto.setPriority(String.join(", ", priorityList));
        dto.setDmdtype(String.join(", ", dmdtypeList));
        dto.setLocationId(String.join(", ", locationIdList));
        dto.setLocationPriority(String.join(", ", locationPriorityList));
        dto.setSelectedRule(String.join(", ", selectedRuleList));
        dto.setEndDate(String.join(", ", endDateList));
    }

    private List<String> split(String str) {
        if (str == null || str.isEmpty())
            return new ArrayList<>();
        return new ArrayList<>(Arrays.asList(str.split("\\s*,\\s*")));
    }

    private void pad(List<String> list, int size) {
        while (list.size() < size) {
            list.add("");
        }
    }
}
