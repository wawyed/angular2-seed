import {Ng2StateDeclaration} from 'ui-router-ng2/ng2/interface';
import {AboutComponent} from './about.component';

// The about states
export let ABOUT_STATES: Ng2StateDeclaration[] = [
    {
      name: 'app.about',
      url: '/about',
      views: {
        'main@app': {
          component: AboutComponent
        }
      }
    }
];
