import 'package:flutter/material.dart';
import '../services/unique_id_service.dart';

class UniqueIdWidget extends StatelessWidget {
  final UniqueIdService uniqueIdService = UniqueIdService();

  UniqueIdWidget({super.key});

  @override
  Widget build(BuildContext context) {
    String uniqueId = uniqueIdService.getUniqueId();

    return Positioned(
      bottom: 10,
      left: 10,
      right: 10,
      child: Container(
        color: Colors.black.withOpacity(0.7),
        padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 10),
        child: Text(
          'User ID: $uniqueId',
          style: const TextStyle(color: Colors.white, fontSize: 12),
          overflow: TextOverflow.ellipsis,
        ),
      ),
    );
  }
}
