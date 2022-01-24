import { NgModule } from '@angular/core';
import { InfoComponent } from './info.component';
import { InfoRoutingModule } from './info-routing.module';

@NgModule({
  imports: [
    InfoRoutingModule
  ],
  declarations: [InfoComponent],
})
export class InfoModule { }
