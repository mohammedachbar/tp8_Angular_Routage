import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { InventionsComponent } from './inventions/inventions.component';
import { InventionsService } from './InventionService';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    InventionsComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule,
      RouterModule.forRoot([
  {
    path: '',
    redirectTo: 'inventions',
    pathMatch: 'full'
  },
  {
    path: 'inventions',
    component: InventionsComponent
  } ,
  {
    path: 'details/:id' ,
    component: DetailsComponent
  }
]),
  ],
  providers: [InventionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
