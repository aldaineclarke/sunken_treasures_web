import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { ValidationComponent } from './components/validation/validation.component';
import { HeaderComponent } from './components/header/header.component';


const modules = [
  ReactiveFormsModule,
]
const declarations = [
  LoadingComponent,
  HeaderComponent,
]
@NgModule({
  declarations: [
    LoadingComponent,
    HeaderComponent,
    ValidationComponent,
    HeaderComponent
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
