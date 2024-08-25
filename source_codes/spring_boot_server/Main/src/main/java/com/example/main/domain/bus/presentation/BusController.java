package com.example.main.domain.bus.presentation;

import com.example.main.domain.bus.enitty.Bus;
import com.example.main.domain.bus.service.BusService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/bus")
@RequiredArgsConstructor
@Tag(name = "버스", description = "버스 관련 api 입니다.")
public class BusController {

    private final BusService busService;

    @Operation(summary = "GPS 저장", description = "유저의 실시간 GPS 를 저장합니다.")
    @PostMapping("/savegps")
    public String saveGPS(@RequestParam double latitude, @RequestParam double longitude) {
        busService.saveGPS(latitude, longitude);
        return "GPS 데이터 저장 완료!";
    }

    @Operation(summary = "GPS 조회", description = "유저의 가장 최근 GPS를 조회합니다.")
    @GetMapping("/getgps")
    public Optional<Bus> getGPS() {
        return busService.getLatestGPS();
    }

}
