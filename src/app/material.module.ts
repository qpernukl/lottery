import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  imports: [
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule
  ],
  declarations: [],
  exports: [
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule
  ]
})
export class MaterialModule { }
