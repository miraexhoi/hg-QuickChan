import 'package:flutter/material.dart';

class BusArrivalScreen extends StatelessWidget {
  const BusArrivalScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('버스 도착 정보'),
      ),
      body: Stack(
        children: [
          // 화면 전체를 차지하는 둥글게 휜 도형 (상하 반전)
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            child: CustomPaint(
              size: Size(MediaQuery.of(context).size.width, MediaQuery.of(context).size.height * 0.4),
              painter: _InvertedCurvePainter(),
            ),
          ),
          // 위치 아이콘
          Positioned(
            top: 200, // 화면 상단에서 위치 조정
            left: MediaQuery.of(context).size.width * 0.5 - 80, // 화면 중앙
            child: Container(
              color: Colors.transparent,
              child: Icon(
                Icons.location_on,
                color: Colors.red, // 아이콘 색상
                size: 150, // 아이콘 크기
              ),
            ),
          ),
          // 버스 도착 시간 텍스트
          Positioned(
            bottom: MediaQuery.of(context).size.height * 0.15, // 텍스트 위치 조정
            left: MediaQuery.of(context).size.width * 0.5 - 150, // 텍스트 중앙 정렬
            child: Container(
              color: Colors.transparent,
              child: Text(
                '버스 도착까지 15분',
                style: const TextStyle(
                  fontSize: 40, // 글자 크기 증가
                  fontWeight: FontWeight.bold,
                  color: Colors.white, // 글자 색상 하얀색
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

// 상하 반전된 둥글게 휜 도형을 그리기 위한 CustomPainter
class _InvertedCurvePainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final Paint paint = Paint()
      ..color = Colors.green // 도형 색상
      ..style = PaintingStyle.fill;

    final Path path = Path()
    // 도형의 시작점을 더 위쪽으로 이동
      ..lineTo(0, size.height * 0.1)
    // 굴곡을 더 강조하고 위로 이동
      ..quadraticBezierTo(size.width * 0.5, -size.height * 0.3, size.width, size.height * 0.1)
      ..lineTo(size.width, size.height) // 하단으로 이동
      ..lineTo(0, size.height) // 왼쪽으로 이동
      ..close(); // 경로 닫기

    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}



