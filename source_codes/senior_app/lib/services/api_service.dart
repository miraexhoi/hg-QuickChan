import 'package:http/http.dart' as http;
import 'dart:convert';
import 'unique_id_service.dart'; // 고유 번호 서비스를 가져옵니다

class ApiService {
  final String _baseUrl = ''; // 서버 URL
  final UniqueIdService _uniqueIdService = UniqueIdService(); // 고유 번호 서비스 인스턴스

  // 위치 데이터를 서버에 전송
  Future<void> sendLocationData(double latitude, double longitude) async {
    final response = await http.post(
      Uri.parse('$_baseUrl/location'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, double>{
        'latitude': latitude,
        'longitude': longitude,
      }),
    );

    if (response.statusCode != 200) {
      // 서버 응답이 성공적이지 않으면 예외 처리
      throw Exception('Failed to send location data');
    }
  }

  // 고유 번호를 서버에 전송
  Future<void> sendUniqueIdToServer() async {
    String uniqueId = _uniqueIdService.getUniqueId(); // 고유 번호 가져오기

    final response = await http.post(
      Uri.parse('$_baseUrl/unique_id'), // 서버의 고유 번호 처리 API 엔드포인트
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'unique_id': uniqueId, // JSON 형태로 고유 번호 전송
      }),
    );

    if (response.statusCode != 200) {
      // 서버 응답이 성공적이지 않으면 예외 처리
      throw Exception('Failed to send unique ID');
    }
  }
}
