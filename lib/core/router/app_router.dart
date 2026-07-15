import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';


class AppRouter extends ChangeNotifier {
  AppRouter._();
  static final AppRouter instance = AppRouter._();

  final routerProvider = GoRouter(
    initialLocation: '/SplashPage',

    routes: [
      // // ---- auth ---- //
      // GoRoute(
      //   path: '/SplashPage',
      //   name: 'SplashPage',
      //   builder: (context, state) => const SplashPage(),
      // ),

    ],
  );
}
