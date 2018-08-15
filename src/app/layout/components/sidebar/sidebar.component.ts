import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from '../../../_services/utility.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  sidebarClass = 'sidebar-open';
  current;
  hover = false;
  isOpen = true;
  classMap = new Map();
  menuItems: any = [
    { name: 'Dashboard', icon: 'fa-home', link: '/dashboard' },
    { name: 'Posts', icon: 'fa-book', link: '/posts' },
    { name: 'Settings', icon: 'fa-cog', link: '/settings' }
  ];

  ngOnDestroy(): void {}

  constructor(private utils: UtilityService) {
    utils.toggle$.subscribe(data => {
      this.toggleClass(data);
      this.isOpen = data;
    });
  }

  toggleClass(open: boolean): string {
    this.sidebarClass = open ? 'sidebar-open' : 'sidebar-closed';
    return this.sidebarClass;
  }

  ngOnInit() {
    this.menuItems.forEach((element, index) => {
      element.background = index === 0 ? '#03a9f4' : '#2d323e';
      element.iconColor = index === 0 ? '#FFF' : '#acaeb3';
    });
    this.current = this.menuItems[0];
  }

  changeColor(menuItem, action) {
    if (action !== 'active') {
      if (menuItem !== this.current) {
        const index = this.menuItems.indexOf(menuItem);
        this.menuItems[index].background = action === 'over' ? '#262A34' : '#2d323e';
        this.menuItems[index].iconColor = action === 'over' ? '#FFF' : '#acaeb3';
      }
    } else {
      const previousIndex = this.menuItems.indexOf(this.current);
      this.current = menuItem;
      const index = this.menuItems.indexOf(menuItem);
      this.menuItems[index].background = '#03a9f4';
      this.menuItems[previousIndex].background = '#2d323e';
      this.menuItems[index].iconColor = '#FFF';
      this.menuItems[previousIndex].iconColor = '#acaeb3';
    }
  }
}
