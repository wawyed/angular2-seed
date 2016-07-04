import {Ng2StateDeclaration} from 'ui-router-ng2/ng2/interface';
import {HomeComponent} from './home.component';
import {NameListService} from '../shared/index';
import 'rxjs/add/operator/toPromise';

const nameList = {
  provide: 'nameList',
  useFactory: (nameListService: NameListService) => {
    return nameListService.get().toPromise();
  },
  deps: [NameListService]
};

// The home states
export let HOME_STATES: Ng2StateDeclaration[] = [
    {
      name: 'app.home',
      url: '/',
      views: {
        'main@app': {
          component: HomeComponent
        }
      },
      resolve: [ nameList ]
    }
];
