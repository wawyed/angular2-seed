import {Component, Inject} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';

import { NameListService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class HomeComponent {

  newName: string;

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {string[]} nameList - The injected NameListService.
   */
  constructor(@Inject('nameList') public nameList: string[]) {}

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.nameList.push(this.newName);
    this.newName = '';
    return false;
  }

}
