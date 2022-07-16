import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterContainerComponent } from './my-counter/my-counter-container.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MyCounterActionsComponent } from './my-counter/my-counter-actions/my-counter-actions.component';
import {MatDividerModule} from '@angular/material/divider';
import { MyCounterResultComponent } from './my-counter/my-counter-result/my-counter-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterContainerComponent,
    MyCounterActionsComponent,
    MyCounterResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count: counterReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
