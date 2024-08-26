package com.example.main.domain.user.request;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class SignupRequest {
    private String email;
    private String password;
    private String name;
    private String number;
}
