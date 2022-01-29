import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
  ],
  imports: [
    MatExpansionModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    MatExpansionModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
})
export class MaterialModule {}
