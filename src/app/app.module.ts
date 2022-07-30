import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AlbumsComponent } from './components/albums/albums.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponentComponent,
    UserDetailsComponent,
    AlbumsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}