import { Component, inject } from '@angular/core';
import { LoadingService } from './shared/services/loading.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angluar_Template';
  loaderService = inject(LoadingService);
  toastrService = inject(ToastrService);
  constructor(){
  }
}
