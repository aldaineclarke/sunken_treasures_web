import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { ValidationComponent } from './components/validation/validation.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';


const modules = [
  ReactiveFormsModule,
]
const declarations = [
  LoadingComponent,
  HeaderComponent,
  CardComponent,
  ValidationComponent,
  FooterComponent
]
@NgModule({
  declarations: declarations,
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
