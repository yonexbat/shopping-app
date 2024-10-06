import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'shoppinglist-d0d2b',
        appId: '1:579901157928:web:2314f1d9791842c7a67b1d',
        databaseURL:
          'https://shoppinglist-d0d2b-default-rtdb.europe-west1.firebasedatabase.app',
        storageBucket: 'shoppinglist-d0d2b.appspot.com',
        apiKey: 'AIzaSyC8a6hEl5gLEvbAQpuDT6foIt3yyISp7s0',
        authDomain: 'shoppinglist-d0d2b.firebaseapp.com',
        messagingSenderId: '579901157928',
        measurementId: 'G-1WH057YYMT',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
