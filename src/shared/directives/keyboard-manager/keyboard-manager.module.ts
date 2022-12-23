import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardManagerDirective } from './keyboard-manager.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [KeyboardManagerDirective],
  declarations: [KeyboardManagerDirective]
})
export class KeyboardManagerModule { }
