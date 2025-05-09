package com.league_of_legend.spirit_blossom.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.league_of_legend.spirit_blossom.dto.CloudinaryImageDTO;
import com.league_of_legend.spirit_blossom.exception.CloudinaryException;
import com.league_of_legend.spirit_blossom.service.CloudinaryService;

@RestController
@RequestMapping("/api/images")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class CloudinaryController {
    private CloudinaryService cloudinaryService;

    @Autowired
    public CloudinaryController(CloudinaryService cloudinaryService) {
        this.cloudinaryService = cloudinaryService;
    }
    
    @GetMapping("/all")
    public ResponseEntity<?> getAllImages(
        @RequestParam("folderpath") String folderPath,
        @RequestParam("max_results") int maxResult    
    ) {
        List<CloudinaryImageDTO> images = cloudinaryService.getAllImages(folderPath, maxResult);

        if(images.isEmpty()) {
            throw new CloudinaryException("No images found in the specified folder");
        }

        return ResponseEntity.ok(images);
    }

}
