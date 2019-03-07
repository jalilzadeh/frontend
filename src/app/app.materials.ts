import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatMenuModule,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
    ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatMenuModule,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
    ],
})
export class MaterialModule { }