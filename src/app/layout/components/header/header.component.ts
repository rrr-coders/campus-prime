import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { UtilityService } from '../../../_services/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggled = true;
  navbarClass = 'navbar-fix-open';

  constructor(private util: UtilityService) {}

  toggle() {
    this.toggled = !this.toggled;
    this.util.toggle(this.toggled);
    this.navbarClass = this.toggled ? 'navbar-fix-open' : 'navbar-fix-closed';
  }

  ngOnInit() {}
}
