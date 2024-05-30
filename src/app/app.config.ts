import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"simulacro-pp-509d2","appId":"1:999546765410:web:560cce48e497696f5d113b","storageBucket":"simulacro-pp-509d2.appspot.com","apiKey":"AIzaSyB3yl8r-Q9PxVkfJ3y0gaJXLnCVqPpUlDc","authDomain":"simulacro-pp-509d2.firebaseapp.com","messagingSenderId":"999546765410"})), 
  provideFirestore(() => getFirestore()), 
  provideStorage(() => getStorage()),
  provideHttpClient()

]
};
