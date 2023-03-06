<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
</head>
<body>
    {{-- <div id="app">
        <example-component></example-component>
        <my-component></my-component>
    </div> --}}

    <div id="app">
        {{-- <v-app>
          <v-toolbar>
            <v-toolbar-title>My App</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn to="/">Home</v-btn>
              <v-btn to="/about">About</v-btn>
            </v-toolbar-items>
          </v-toolbar>
    
          <router-view></router-view>
        </v-app> --}}
      </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
