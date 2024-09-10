import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrl: './update-author.component.scss'
})
export class UpdateAuthorComponent {

  updateAuthorForm!: FormGroup;

  id: number = this.activeRoute.snapshot.params['id'];
  constructor(private activeRoute: ActivatedRoute, 
    private service: HomeService,
    private fb: FormBuilder,
    private route: Router  
  ) { }
  ngOnInit() {
    this.updateAuthorForm = this.fb.group({
      name: ['', [Validators.required]],
      book: ['', [Validators.required]]
    })
    this.getAuthorById();
  }
  getAuthorById() {
    this.service.getAuthorById(this.id).subscribe((res) => {
      console.log(res);
      this.updateAuthorForm.patchValue(res);
    })
  }
  updateAuthor() {
    this.service.updateAuthor(this.id, this.updateAuthorForm.value).subscribe((res) => {
      console.log(res);
      if(res.id != null) {
        this.route.navigateByUrl('home/get-all-author');
      }
    })
  }

}
