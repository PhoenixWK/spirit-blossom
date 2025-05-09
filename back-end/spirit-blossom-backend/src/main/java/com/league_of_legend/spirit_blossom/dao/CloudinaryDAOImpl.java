package com.league_of_legend.spirit_blossom.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cloudinary.Cloudinary;
import com.cloudinary.api.ApiResponse;
import com.cloudinary.utils.ObjectUtils;
import com.league_of_legend.spirit_blossom.dto.CloudinaryImageDTO;

@Component
public class CloudinaryDAOImpl implements CloudinaryDAO{
    private Cloudinary cloudinary;

    @Autowired
    public CloudinaryDAOImpl(Cloudinary cloudinary) { 
        this.cloudinary = cloudinary;
    }

    @Override
    public List<CloudinaryImageDTO> getAllImages(String folderPath, int maxResults) {
        List<CloudinaryImageDTO> images = new ArrayList<>();
        
        try {
            // First, try to list resources in the folder
            @SuppressWarnings("unchecked")
            Map<String, Object> options = ObjectUtils.asMap(
                "type", "upload",
                "prefix", folderPath,
                "max_results", maxResults
            );
              
            ApiResponse response = cloudinary.api().resources(options);

            @SuppressWarnings("unchecked")
            List<Map<String, Object>> resources = (List<Map<String, Object>>) response.get("resources");

            if (resources == null) {
                return images;
            }

            for(Map<String, Object> resource : resources) {
                try {
                    String publicId = (String) resource.get("public_id");
                    String url = (String) resource.get("url");
                    String format = (String) resource.get("format");
                    String secureUrl = (String) resource.get("secure_url");
                    int width = (int) resource.get("width");
                    int height = (int) resource.get("height");

                    CloudinaryImageDTO imageDTO = new CloudinaryImageDTO(
                        publicId, format, url, secureUrl, width, height
                    );

                    images.add(imageDTO);
                } catch (Exception e) {
                    throw new RuntimeException("Error processing resource: " + e.getMessage(), e);
                }
            }

        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch images from Cloudinary: " + e.getMessage(), e);
        }

        return images;
    }
} 
