import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './componenets/departamento/add/add.component';
import { ListarComponent } from './componenets/departamento/listar/listar.component';
import { UpdateComponent } from './componenets/departamento/update/update.component';
import { HeaderComponent } from './componenets/template/header/header.component';
import { FooterComponent } from './componenets/template/footer/footer.component';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DepartamentoService } from './services/departamento.service';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListarComponent,
    UpdateComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [
    DepartamentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
