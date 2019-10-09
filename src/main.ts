import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

import Amplify from 'aws-amplify';

Amplify.configure({

  Interactions: {
    bots: {
      "WeatherBot": {
        "name": "WeatherBot",
        "alias": "$LATEST",
        "region": "us-east-1",
      },
    }
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
