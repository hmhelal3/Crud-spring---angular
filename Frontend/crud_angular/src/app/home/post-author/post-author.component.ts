import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-author',
  templateUrl: './post-author.component.html',
  styleUrl: './post-author.component.scss'
})
export class PostAuthorComponent  {
onSubmit() {
console.log(this.postAuthorForm.value);
this.homeService.postAuthor(this.postAuthorForm.value).subscribe((res) => {
  console.log(res);
  if(res.id != null) {
    this.route.navigateByUrl('home/get-all-author');
  }
});
}
  postAuthorForm: FormGroup = this.fb.group({
    name: ['',[Validators.required]],
    book: ['',[Validators.required]],
  });

  constructor(private fb: FormBuilder, private homeService: HomeService, private route: Router) { }
 
}