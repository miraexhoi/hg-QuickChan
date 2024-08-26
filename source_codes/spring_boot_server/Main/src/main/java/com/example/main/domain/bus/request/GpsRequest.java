package com.example.main.domain.bus.request;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class GpsRequest {
    private double latitude;
    private double longtitude;
}
