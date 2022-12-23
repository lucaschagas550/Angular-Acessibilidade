import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { KeyboardManagerItemDirective } from './keyboard-managed-item.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KeyboardManagerDirective,
    KeyboardManagerItemDirective],
  declarations: [
    KeyboardManagerDirective,
    KeyboardManagerItemDirective]
})
export class KeyboardManagerModule { }
