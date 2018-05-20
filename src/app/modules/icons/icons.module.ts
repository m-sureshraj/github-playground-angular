import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCamera, IconHeart, IconGithub } from 'angular-feather';

const icons = [
  IconCamera,
  IconHeart,
  IconGithub
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: icons
})
export class IconsModule { }
