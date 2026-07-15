import 'package:flutter/material.dart';

class AppColors {
  static const Color primaryBlueColor = Color(0xFF2E519E);
  static const Color accentBlueColor = Color(0xFF41B8D0);
  static const Color lightGreenColor = Color(0xFF9DCA8D);
  static const Color backgroundColor = Color(0xFFFFFFFF);
  static const Color cardBackgroundColor = Color(0xFFF5F5F5);

  static const Color textSecondaryColor = Color(0xFF555555);

  static ThemeData get themeData => ThemeData(
    colorScheme: ColorScheme.fromSeed(seedColor: primaryBlueColor),
    scaffoldBackgroundColor: backgroundColor,
    cardColor: cardBackgroundColor,
    // fontFamily: 'Cairo',
    textTheme: TextTheme(bodyLarge: TextStyle(color: textSecondaryColor)),
  );
}
