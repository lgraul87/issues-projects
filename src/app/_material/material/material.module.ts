import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
  ],
  imports: [
    MatExpansionModule,
    MatIconModule,
  ],
  exports: [
    MatExpansionModule,
    MatIconModule,
  ],
  providers: [],
})
export class MaterialModule {}
