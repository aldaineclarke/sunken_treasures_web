import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@App/app-routing.module';
import { AppComponent } from '@App/app.component';
import { httpInterceptorProviders } from '@App/interceptors';
import { SharedModule } from '@Shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates:true
    }),
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
