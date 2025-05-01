package com.league_of_legend.spirit_blossom.dto;

public class CloudinaryImageDTO {
    private String publicId;
    private String format;
    private String url;
    private String secureUrl;
    private int width;
    private int height;


    public CloudinaryImageDTO(String publicId, String format, String url, String secureUrl, int width, int height) {
        this.publicId = publicId;
        this.format = format;
        this.url = url;
        this.secureUrl = secureUrl;
        this.width = width;
        this.height = height;
    }

    public String getPublicId() {
        return publicId;
    }

    public String getFormat() {
        return format;
    }

    public String getUrl() {
        return url;
    }

    public String getSecureUrl() {
        return secureUrl;
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }
    
}
