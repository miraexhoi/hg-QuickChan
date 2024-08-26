package com.example.main.domain.bus.service;

import com.example.main.domain.bus.enitty.Bus;
import com.example.main.domain.bus.repository.BusRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class BusServiceImpl implements BusService{

    private BusRepository busRepository;

    @Override
    public Bus saveGPS(double latitude, double longitude) {
        Bus gps = new Bus(latitude, longitude);
        return busRepository.save(gps);
    }

    @Override
    public Optional<Bus> getLatestGPS() {
        return busRepository.findTopByOrderByIdDesc();
    }
}
