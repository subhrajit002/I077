package com.JAVA_CURD.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.JAVA_CURD.employee.model.DeploySummaryDTO;
import com.JAVA_CURD.employee.service.DeploySummaryService;

@RestController
@RequestMapping("/deploy-summary")
@CrossOrigin
public class DeploySummaryController {

    @Autowired
    private DeploySummaryService deploySummaryService;

    @GetMapping
    public ResponseEntity<List<DeploySummaryDTO>> getSummary() {
        return ResponseEntity.ok(deploySummaryService.getMergedSummary());
    }
}

