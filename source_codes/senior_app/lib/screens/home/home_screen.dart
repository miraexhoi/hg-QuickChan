//home_screen

import 'package:flutter/material.dart';
import 'package:hackathon_app/screens/bus_menu/bus_screen.dart';
import 'package:hackathon_app/screens/taxi_menu/taxi_screen.dart';
import 'package:hackathon_app/screens/call_menu/call_screen.dart';
import 'package:hackathon_app/screens/emergen_menu/emergen_screen.dart';
import 'package:hackathon_app/services/location_service.dart';
import 'package:hackathon_app/services/api_service.dart';

class HomeScreen extends StatelessWidget {
  final LocationService _locationService = LocationService();
  final ApiService _apiService = ApiService();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: PreferredSize(
          preferredSize: Size.fromHeight(30.0), // 원하는 높이로 설정
          child: AppBar(
            title: Text(''),
          ),
        ),
        body: Column(
          children: [
            Expanded(
              child: Container(
                padding: EdgeInsets.symmetric(horizontal: 20.0),
                child: ElevatedButton(
                    onPressed: () async {
                      // GPS 데이터를 가져와 서버에 전송
                      try {
                        final position = await _locationService.getCurrentLocation();
                        await _apiService.sendLocationData(position.latitude, position.longitude);
                        print('Location sent: (${position.latitude}, ${position.longitude})');
                      } catch (e) {
                        print('Failed to send location: $e');
                      }

                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => Screen1()),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.orange,
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8.0), // 모서리 둥글기를 8.0으로 설정
                      ),
                    ),
                    child:Align(
                      alignment: Alignment.topLeft, // 왼쪽 상단에 정렬
                      child: Text(
                        '버스정보',
                        style: TextStyle(
                          fontSize: 55,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    )
                ),
              ),
            ),
            SizedBox(height: 20),
            Expanded(
              child: Container(
                padding: EdgeInsets.symmetric(horizontal: 20.0),
                child: ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => Screen2()),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.orange,
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8.0), // 모서리 둥글기를 8.0으로 설정
                      ),
                    ),
                    child:Align(
                      alignment: Alignment.topLeft, // 왼쪽 상단에 정렬
                      child: Text(
                        '택시호출',
                        style: TextStyle(
                          fontSize: 55,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    )
                ),
              ),
            ),
            SizedBox(height: 20),
            Expanded(
              child: Container(
                padding: EdgeInsets.symmetric(horizontal: 20.0),
                child: ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => Screen3()),
                    );
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.orange,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8.0), // 모서리 둥글기를 8.0으로 설정
                    ),
                  ),
                  child:Align(
                    alignment: Alignment.topLeft, // 왼쪽 상단에 정렬
                    child: Text(
                      '간편연락',
                      style: TextStyle(
                        fontSize: 55,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            SizedBox(height: 20),
            Expanded(
              child: Container(
                padding: EdgeInsets.symmetric(horizontal: 20.0),
                child: ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => Screen4()),
                    );
                  },
                  style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.orange,
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8.0),)
                  ),
                  child:Align(
                    alignment: Alignment.topLeft,
                    child: Text(
                      '긴급호출',
                      style: TextStyle(
                        fontSize: 55,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
              ),),
          ],
        ),
      ),
    );
  }
}