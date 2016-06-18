import {AppComponent} from './app.component';
import {Ng2StateDeclaration} from 'ui-router-ng2/ng2/interface';
import {HOME_STATES} from './+home/index';
import {ToolbarComponent, NavbarComponent} from './shared/index';
import {ABOUT_STATES} from './+about/index';

/**
 * This file exports all the application states as an array.
 *
 * - It first imports home, and about nested states from +home/index, and +about/index.
 * - It defines the top-level states (MAIN_STATES).
 * - Then, it builds and exports an array with all the states.
 * - This array is imported by router.config.ts and the states are registered with the `StateProvider`
 */

// The top level states
let MAIN_STATES: Ng2StateDeclaration[] = [
    // The top-level app state. This state fills the root
    // <ui-view></ui-view> (defined in index.html) with the AppComponent
    {
      name: 'app',
      url: '',
      abstract: true,
      views: {
        $default: {
          component: AppComponent,
        },
        'header@app': {
          component: ToolbarComponent
        },
        'nav@app': {
          component: NavbarComponent
        }
      }
    }
];

// Combine MAIN_STATES, HOME_STATES, and ABOUT_STATES and export them.
// This array is imported in router.config.ts, then each state is registered
export let INITIAL_STATES: Ng2StateDeclaration[] =
    MAIN_STATES.concat(HOME_STATES, ABOUT_STATES);
