import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostAuthorComponent } from './post-author/post-author.component';
import { GetAllAuthorComponent } from './get-all-author/get-all-author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HomeService } from './home.service';


const routes: Routes = [
  { path: '', component: PostAuthorComponent },
  { path: 'get-all-author', component: GetAllAuthorComponent },
  { path: 'update/:id', component: UpdateAuthorComponent }
];

@NgModule({
  declarations: [
    PostAuthorComponent,
    GetAllAuthorComponent,
    UpdateAuthorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi()),HomeService],
})


export class HomeModule { }
