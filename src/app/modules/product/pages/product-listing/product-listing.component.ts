import { ScriptLoaderService } from '@App/services/script-loader.service';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent {
  constructor(
    private scriptLoader:ScriptLoaderService,
    private cdr: ChangeDetectorRef

  ){}
    ngOnInit(){
      this.scriptLoader.loadScript("https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js");
      this.cdr.detectChanges();
    }
}
