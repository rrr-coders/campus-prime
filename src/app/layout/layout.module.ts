import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent]
})
export class LayoutModule {}
