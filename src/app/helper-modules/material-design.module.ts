import { NgModule } from '@angular/core';
import {MatButtonModule,  MatInputModule} from '@angular/material';

const aNeededModule = [MatButtonModule, MatInputModule];

@NgModule({
  imports: aNeededModule,
  exports: aNeededModule
})
export class MaterialDesignModule { }
