import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-footer',
  templateUrl: './mini-footer.component.html',
  styleUrls: ['./mini-footer.component.scss']
})
export class MiniFooterComponent {
    year = new Date().getFullYear();
}
