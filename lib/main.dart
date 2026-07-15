import 'package:business_portfolio/core/language/app_localization.dart';
import 'package:business_portfolio/core/router/app_router.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';


void main() {
  runApp(ProviderScope(child: const InjazTeam()));
}

class InjazTeam extends ConsumerWidget {
  const InjazTeam({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final locale = ref.watch(AppLocalization.localeProvider);
    final dircation = ref.watch(AppLocalization.directionalityProvider);

    return MaterialApp.router(
      title: 'Injaz Team',
      locale: locale,
      routerConfig: AppRouter.instance.routerProvider,
    //  theme: ThemeData(colorScheme: AppColors.themeData.colorScheme),
      debugShowCheckedModeBanner: false,
      builder: (context, child) =>
          Directionality(textDirection: dircation, child: child!),
    );
  }
}
