package com.league_of_legend.spirit_blossom.controller;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.league_of_legend.spirit_blossom.dto.CloudinaryImageDTO;
import com.league_of_legend.spirit_blossom.service.impl.CloudinaryServiceImpl;

@RestController
@RequestMapping("/api/images")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class CloudinaryController {
    private CloudinaryServiceImpl cloudinaryServiceImpl;

    @Autowired
    public CloudinaryController(CloudinaryServiceImpl cloudinaryServiceImpl) {
        this.cloudinaryServiceImpl = cloudinaryServiceImpl;
    }
    
    @GetMapping("/all")
    public ResponseEntity<?> getAllImages(
        @RequestParam("folderpath") String folderPath,
        @RequestParam("max_results") int maxResult    
    ) {
        try {
            List<CloudinaryImageDTO> images = cloudinaryServiceImpl.getAllImages(folderPath, maxResult);

            if(!images.isEmpty()) {
                return ResponseEntity.ok(images);
            } else {
                Map<String, String> response = new HashMap<>();
                response.put("message", "No images found in the specified folder");
                return ResponseEntity.ok(response);
            }
        } catch(Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "Failed to fetch images");
            response.put("message", e.getMessage());
            return ResponseEntity.status(500).body(response);
        }
    }

}
