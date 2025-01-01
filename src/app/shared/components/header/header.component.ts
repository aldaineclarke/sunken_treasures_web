import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showSearchBox = false;
  sideNavIsOpen = false;
  showAllDepartments = false;
  showHideSearchBox(){
    this.showSearchBox = !this.showSearchBox;
    console.log("Show search box?", this.showSearchBox)
  }

  toggleSideNav(){
    this.sideNavIsOpen = !this.sideNavIsOpen;
  }

  toggleDepartmentList(){
    this.showAllDepartments = !this.showAllDepartments;
  }
}
