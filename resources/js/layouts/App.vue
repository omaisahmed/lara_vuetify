<template>
    <v-app>
      <v-app-bar app>
      <v-toolbar color="primary" width="100">
        <v-toolbar-title>My App</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/about">About</v-btn>
        <v-btn to="/contact">Contact</v-btn>
      </v-toolbar>
      </v-app-bar>
  
      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </template>