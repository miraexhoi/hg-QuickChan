package com.example.main.domain.bus.repository;

import com.example.main.domain.bus.enitty.Bus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BusRepository extends JpaRepository<Bus, Long> {
    Optional<Bus> findTopByOrderByIdDesc();
}
