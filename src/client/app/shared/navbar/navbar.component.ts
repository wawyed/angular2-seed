import { Component } from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2/ng2';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [UIROUTER_DIRECTIVES]
})
export class NavbarComponent {}
