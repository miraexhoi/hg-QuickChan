package com.example.main.domain.bus.enitty;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Table(name = "buses")
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /* 위도 */
    private double latitude;

    /* 경도 */
    private double longitude;

    public Bus(double latitude, double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
