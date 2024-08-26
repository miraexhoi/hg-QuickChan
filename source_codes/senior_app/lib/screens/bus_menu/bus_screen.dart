import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'bus_arrival_screen.dart'; // 페이지 이동을 위해 bus_arrival_screen.dart 임포트

class Screen1 extends StatefulWidget {
  @override
  _Screen1State createState() => _Screen1State();
}

class _Screen1State extends State<Screen1> {
  String _currentPosition = "위치를 가져오는 중...";

  @override
  void initState() {
    super.initState();
    _getCurrentLocation();
  }

  Future<void> _getCurrentLocation() async {
    try {
      // 위치 권한을 요청
      LocationPermission permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied ||
          permission == LocationPermission.deniedForever) {
        setState(() {
          _currentPosition = "위치 권한이 거부되었습니다.";
        });
        return;
      }

      // 현재 위치를 가져옴
      Position position = await Geolocator.getCurrentPosition(
          desiredAccuracy: LocationAccuracy.high);
      setState(() {
        _currentPosition = "위도: ${position.latitude}, 경도: ${position.longitude}";
      });
    } catch (e) {
      setState(() {
        _currentPosition = "위치를 가져오는 데 실패했습니다: $e";
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('버스 정보'),
      ),
      body: Column(
        children: [
          // 위치 데이터 표시
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              _currentPosition,
              style: TextStyle(
                fontSize: 16,
                color: Colors.grey[600],
              ),
            ),
          ),
          Expanded(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // 왼쪽 긴 줄
                Container(
                  width: 8,
                  color: Colors.brown,
                  margin: EdgeInsets.only(left: 20), // 버튼과 겹치는 정도 조절
                  child: Column(
                    children: [
                      Expanded(
                        child: Container(
                          color: Colors.brown,
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(width: 10),
                // 도착지 버튼
                Expanded(
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: _buildDestinationButton(
                        context, Icons.directions_bus, "도착지 1"),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDestinationButton(
      BuildContext context, IconData icon, String destination) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20.0),
      child: ElevatedButton(
        onPressed: () {
          // 도착지 버튼이 눌렸을 때 BusArrivalScreen으로 이동
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const BusArrivalScreen()),
          );
        },
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.brown, // 버튼 배경 색상
          foregroundColor: Colors.white, // 버튼 텍스트 색상
          padding: const EdgeInsets.all(16.0),
          fixedSize: Size(350, 200), // 버튼 가로 길이와 세로 길이 설정
          shape: const BeveledRectangleBorder(
            borderRadius: BorderRadius.only(
              topRight: Radius.circular(100),
              bottomRight: Radius.circular(100),
              topLeft: Radius.circular(0),
              bottomLeft: Radius.circular(0),
            ),
          ),
        ),
        child: Row(
          children: [
            // 아이콘과 문자를 포함한 버튼 디자인
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(
                  Icons.home,
                  size: 80,
                  color: Colors.white, // 아이콘 색상
                ),
                SizedBox(height: 10),
                Text(
                  '도착지',
                  style: const TextStyle(
                    fontSize: 50,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
