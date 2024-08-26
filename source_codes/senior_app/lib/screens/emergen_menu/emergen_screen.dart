import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class Screen4 extends StatelessWidget {
  const Screen4({super.key});

  // 전화 걸기 기능을 구현하는 메서드
  void _makePhoneCall(String phoneNumber) async {
    final Uri launchUri = Uri(
      scheme: 'tel',
      path: phoneNumber,
    );
    if (await canLaunchUrl(launchUri)) {
      await launchUrl(launchUri);
    } else {
      throw 'Could not launch $phoneNumber';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('긴급호출'),
      ),
      body: Column(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.start, // 위쪽 정렬
        children: [
          // 112 버튼
          Container(
            width: double.infinity,
            height: 250.0,
            padding: const EdgeInsets.symmetric(horizontal: 80.0, vertical: 8.0),
            child: ElevatedButton(
              onPressed: () => _makePhoneCall('112'),
              style: ElevatedButton.styleFrom(
                padding: const EdgeInsets.all(20),
                backgroundColor: Colors.red,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8.0),
                ),
              ),
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  SizedBox(width: 20.0),
                  Text(
                    '112',
                    style: TextStyle(
                      fontSize: 100,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(width: 80.0),
                  Icon(Icons.security, size: 120, color: Colors.white),
                ],
              ),
            ),
          ),
          // 119 버튼
          Container(
            width: double.infinity,
            height: 250.0,
            padding: const EdgeInsets.symmetric(horizontal: 80.0, vertical: 8.0),
            child: ElevatedButton(
              onPressed: () => _makePhoneCall('119'),
              style: ElevatedButton.styleFrom(
                padding: const EdgeInsets.all(20),
                backgroundColor: Colors.red,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8.0),
                ),
              ),
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  SizedBox(width: 20.0),
                  Text(
                    '119',
                    style: TextStyle(
                      fontSize: 100,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(width: 80.0),
                  Icon(Icons.fire_truck, size: 120, color: Colors.white),
                ],
              ),
            ),
          ),
          // 콜센터 버튼
          Container(
            width: double.infinity,
            height: 250.0,
            padding: const EdgeInsets.symmetric(horizontal: 80.0, vertical: 8.0),
            child: ElevatedButton(
              onPressed: () => _makePhoneCall('010-1234-5678'),
              style: ElevatedButton.styleFrom(
                padding: const EdgeInsets.all(20),
                backgroundColor: Colors.red,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8.0),
                ),
              ),
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  SizedBox(width: 20.0),
                  Text(
                    '콜센터',
                    style: TextStyle(
                      fontSize: 80,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(width: 20.0),
                  Icon(Icons.phone, size: 120, color: Colors.white),
                ],
              ),
            ),
          ),
          // 여기에 다른 버튼 추가 가능
        ],
      ),
    );
  }
}
