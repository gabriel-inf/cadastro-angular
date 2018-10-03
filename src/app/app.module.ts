import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import 'hammerjs';
import { CadastroComponent } from './cadastro/cadastro.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CardsComponent } from './cards/cards.component';
import { ListaCursistasComponent } from './lista-cursistas/lista-cursistas.component';
import {LayoutModule} from '@angular/cdk/layout';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyNavComponent } from './my-nav/my-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CardsComponent,
    ListaCursistasComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatListModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
