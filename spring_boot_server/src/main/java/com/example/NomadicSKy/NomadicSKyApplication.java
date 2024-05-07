package com.example.NomadicSKy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class NomadicSKyApplication {

	public static void main(String[] args) {
		SpringApplication.run(NomadicSKyApplication.class, args);
	}

}
