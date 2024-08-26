package com.example.main.domain.bus.service;

import com.example.main.domain.bus.enitty.Bus;

import java.util.Optional;

public interface BusService {
    Bus saveGPS(double latitude, double longitude);
    Optional<Bus> getLatestGPS();
}
