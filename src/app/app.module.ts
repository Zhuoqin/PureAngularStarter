import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts';


import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {NgMaterialModule} from './ngMaterial.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        NgMaterialModule,
        ChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
