import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../_services/utility.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  mainClass = 'main-container-open';
  constructor(private utils: UtilityService) {
    utils.toggle$.subscribe(data => {
      this.mainClass = data ? 'main-container-open' : 'main-container-closed';
    });
  }

  ngOnInit() {}
}
