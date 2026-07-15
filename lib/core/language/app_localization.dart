import 'package:business_portfolio/core/language/en.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_riverpod/legacy.dart';
import 'ar.dart';

class AppLocalization {
  static final localeProvider = StateProvider<Locale>((ref) => Locale('ar'));
  static final directionalityProvider = Provider<TextDirection>((ref) {
    final locale = ref.watch(localeProvider);
    return locale.languageCode == 'ar' ? TextDirection.rtl : TextDirection.ltr;
  });

  static final Locale _locale = const Locale('ar');
  static Locale get locale => _locale;

  final Map<String, Map> _localizationValues = {'ar': ar, 'en': en};

  // ---- change language ---- //
  void changeLanguage(WidgetRef ref, String code) {
    ref.read(localeProvider.notifier).state = Locale(code);
  }

  String translate(String key) {
    return _localizationValues[_locale.languageCode]?[key] ?? key;
  }
}

extension LocalizationExtension on BuildContext {
  String tr(WidgetRef ref, String key) {
    // final locale =
    ref.watch(AppLocalization.localeProvider);
    return AppLocalization().translate(key);
  }
}
