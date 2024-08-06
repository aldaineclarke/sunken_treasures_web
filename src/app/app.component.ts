import { Component, inject } from '@angular/core';
import { LoadingService } from './shared/services/loading.service';
import { ToastrService } from 'ngx-toastr';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sunken Treasures';
  loaderService = inject(LoadingService);
  toastrService = inject(ToastrService);
  router = inject(Router)
  constructor(){
  }

  showHeaderFooter: boolean = true;


  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.router.url;
      console.log(currentRoute);
      
      this.showHeaderFooter = !currentRoute.includes('/login');
    });
  }
}
