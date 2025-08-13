package com.JAVA_CURD.employee.model;

public class DeploySummaryDTO {
    private String priority;
    private String dmdtype;
    private String locationId;
    private String locationPriority;
    private String selectedRule;
    private String endDate;

    public DeploySummaryDTO() {
    }

    public DeploySummaryDTO(String priority, String dmdtype, String locationId,
            String locationPriority, String selectedRule, String endDate) {
        this.priority = priority;
        this.dmdtype = dmdtype;
        this.locationId = locationId;
        this.locationPriority = locationPriority;
        this.selectedRule = selectedRule;
        this.endDate = endDate;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getDmdtype() {
        return dmdtype;
    }

    public void setDmdtype(String dmdtype) {
        this.dmdtype = dmdtype;
    }

    public String getLocationId() {
        return locationId;
    }

    public void setLocationId(String locationId) {
        this.locationId = locationId;
    }

    public String getLocationPriority() {
        return locationPriority;
    }

    public void setLocationPriority(String locationPriority) {
        this.locationPriority = locationPriority;
    }

    public String getSelectedRule() {
        return selectedRule;
    }

    public void setSelectedRule(String selectedRule) {
        this.selectedRule = selectedRule;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    @Override
    public String toString() {
        return "DeploySummaryDTO{" +
                "priority='" + priority + '\'' +
                ", dmdtype='" + dmdtype + '\'' +
                ", locationId='" + locationId + '\'' +
                ", locationPriority='" + locationPriority + '\'' +
                ", selectedRule='" + selectedRule + '\'' +
                ", endDate='" + endDate + '\'' +
                '}';
    }
}
