<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="{{ asset('styles/main.css') }}" />

        <!-- Scripts -->
        <script defer src="{{ asset('js/app.js') }}"></script>
    </head>
    <body>
        @include('components.includes.header')

        <!-- Page Content -->
        <main>
            @yield('main')
        </main>
    </body>
</html>
