import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { ValidationComponent } from './components/validation/validation.component';


const modules = [
  ReactiveFormsModule,
]
const declarations = [
  LoadingComponent
]
@NgModule({
  declarations: [
    LoadingComponent,
    ValidationComponent
  ],
  imports: [
    CommonModule,
    ...modules
  ],
  exports:[
    ...modules,
    ...declarations
  ]
})
export class SharedModule { }
