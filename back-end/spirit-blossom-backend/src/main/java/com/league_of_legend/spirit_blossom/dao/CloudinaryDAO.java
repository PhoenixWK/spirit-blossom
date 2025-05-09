package com.league_of_legend.spirit_blossom.dao;

import java.util.List;

import com.league_of_legend.spirit_blossom.dto.CloudinaryImageDTO;


public interface CloudinaryDAO {
    List<CloudinaryImageDTO> getAllImages(String folderPath, int maxResults);
}
