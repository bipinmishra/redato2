import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListpageComponent } from './listpage/listpage.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './services/rest.service';
import { FilterPipeModule } from 'ngx-filter-pipe';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListpageComponent },
  { path: 'detail/:id', component: DetailpageComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    ListpageComponent,
    DetailpageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FilterPipeModule,
    FormsModule
  ],
  exports:[RouterModule],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
