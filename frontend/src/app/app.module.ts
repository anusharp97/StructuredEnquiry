import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './component/insert/insert.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule, MatFormFieldModule, MatInputModule ,MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';
import { SearchComponent } from './component/search/search.component';
import { FormsModule } from '@angular/forms';
import {IgxSnackbarComponent, IgxSnackbarModule} from 'igniteui-angular';
import { UserService } from './user.service';
import { EditComponent } from './component/edit/edit.component';
import { UpdateComponent } from './component/update/update.component';
import { SearchresultComponent } from './component/searchresult/searchresult.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: LoginComponent },
  { path: 'insert', component: InsertComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'search', component: SearchComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'searchresult/:id', component: SearchresultComponent },
]; 

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    LoginComponent,
    SearchComponent,
    EditComponent,
    UpdateComponent,
    SearchresultComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatDividerModule, 
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
