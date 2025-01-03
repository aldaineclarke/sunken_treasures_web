import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from "../../shared/shared.module";
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SlickCarouselModule,
        SharedModule
    ]
})
export class HomeModule { }
