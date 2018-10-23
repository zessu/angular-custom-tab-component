import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material-module';
import { AppComponent } from './app.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabComponent } from './tab/tab.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
import { NextcontrolDirective } from './nextcontrol.directive';
import { ContentDirective } from './content.directive';

@NgModule({
  declarations: [
    AppComponent,
    TabPanelComponent,
    TabComponent,
    NextcontrolDirective,
    ContentDirective
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'never' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
