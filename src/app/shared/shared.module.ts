import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../layout/authentication/_services/auth.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PageNotFoundComponent],
  exports: [
    PageNotFoundComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService]
    };
  }
}
