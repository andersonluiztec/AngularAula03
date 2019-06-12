import { Component, Input } from "@angular/core";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css', './header-search.css']
  })

  export class HeaderComponent { 

    @Input() title = ''
    isMenuOpen = false;

    handleMenuClick() {
        this.isMenuOpen = !this.isMenuOpen;
    }
  }