import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { TopComponentComponent } from './top-component/top-component.component';
import { MidComponentComponent } from './mid-component/mid-component.component';
import { BottomComponentComponent } from './bottom-component/bottom-component.component';
import { MidTopComponent } from './mid-top/mid-top.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponentComponent,
    MidComponentComponent,
    BottomComponentComponent,
    MidTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
