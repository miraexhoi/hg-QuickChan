package com.example.main.domain.user.service;

import com.example.main.domain.user.request.SignupRequest;
import com.example.main.global.exception.BusinessException;

public interface UserService {
    void registerUser(SignupRequest signupRequest) throws BusinessException;
}
