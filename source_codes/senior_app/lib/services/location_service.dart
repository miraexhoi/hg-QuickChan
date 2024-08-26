import 'package:geolocator/geolocator.dart';

class LocationService {
  // 위치 권한 요청 및 현재 위치 가져오기
  Future<Position> getCurrentLocation() async {
    bool serviceEnabled;
    LocationPermission permission;

    // 위치 서비스 활성화 여부 확인
    serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      // 위치 서비스가 비활성화된 경우 예외 처리
      throw Exception('Location services are disabled.');
    }

    // 위치 권한 확인
    permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        // 위치 권한이 거부된 경우 예외 처리
        throw Exception('Location permissions are denied.');
      }
    }

    if (permission == LocationPermission.deniedForever) {
      // 위치 권한이 영구적으로 거부된 경우 예외 처리
      throw Exception('Location permissions are permanently denied.');
    }

    // 현재 위치 반환
    return await Geolocator.getCurrentPosition();
  }
}
