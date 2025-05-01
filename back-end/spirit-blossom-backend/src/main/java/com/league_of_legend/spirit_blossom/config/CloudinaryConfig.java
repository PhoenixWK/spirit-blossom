package com.league_of_legend.spirit_blossom.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import io.github.cdimascio.dotenv.Dotenv;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary() {
        try {
            Dotenv dotenv = Dotenv.configure()
                .directory("back-end/spirit-blossom-backend/src/main/resources/.env")
                .load();
            
            String cloudName = dotenv.get("CLOUDINARY_CLOUD_NAME");
            String apiKey = dotenv.get("CLOUDINARY_API_KEY");
            String apiSecret = dotenv.get("CLOUDINARY_API_SECRET");
            
            return new Cloudinary(
                ObjectUtils.asMap(
                    "cloud_name", cloudName,
                    "api_key", apiKey,
                    "api_secret", apiSecret,
                    "secure", true
                )
            );
        } catch (Exception e) {
            throw new RuntimeException("Failed to initialize Cloudinary", e);
        }
    }
}
