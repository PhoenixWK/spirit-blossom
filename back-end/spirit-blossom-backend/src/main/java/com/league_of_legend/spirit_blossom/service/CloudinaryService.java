package com.league_of_legend.spirit_blossom.service;

import java.util.List;

import com.league_of_legend.spirit_blossom.dto.CloudinaryImageDTO;


public interface CloudinaryService {
    List<CloudinaryImageDTO> getAllImages(String folderPath, int maxResults);
}
