package com.league_of_legend.spirit_blossom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.league_of_legend.spirit_blossom.dao.CloudinaryDAO;
import com.league_of_legend.spirit_blossom.dto.CloudinaryImageDTO;

@Service
public class CloudinaryServiceImpl implements CloudinaryService {

    private CloudinaryDAO cloudinaryDAO;

    @Autowired
    public CloudinaryServiceImpl(CloudinaryDAO cloudinaryDAO) {
        this.cloudinaryDAO = cloudinaryDAO;
    }

    @Override
    public List<CloudinaryImageDTO> getAllImages(String folderPath, int maxResults) {
        return cloudinaryDAO.getAllImages(folderPath, maxResults);
    }
    
}
