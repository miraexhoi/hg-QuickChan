import 'dart:html';

class UniqueIdService {
  static const String _storageKey = 'unique_id';

  String _generateUniqueId() {
    // 여섯 자리 숫자 + 네 자리 문자 조합 생성
    String timestamp = DateTime.now().millisecondsSinceEpoch.toString();
    String numericPart = timestamp.substring(timestamp.length - 6);
    String alphabeticPart = DateTime.now().millisecondsSinceEpoch.toRadixString(36).substring(0, 4).toUpperCase();
    return numericPart + alphabeticPart;
  }

  String getUniqueId() {
    // LocalStorage에서 고유 ID를 불러옴
    String? storedId = window.localStorage[_storageKey];

    // 저장된 ID가 없으면 새로 생성
    if (storedId != null) {
      return storedId;
    } else {
      String newId = _generateUniqueId();
      window.localStorage[_storageKey] = newId;
      return newId;
    }
  }
}
