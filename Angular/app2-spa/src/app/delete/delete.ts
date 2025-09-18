import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  imports: [],
  templateUrl: './delete.html',
  styleUrl: './delete.css'
})
export class Delete {
  constructor(private router:ActivatedRoute){
    const id  = this.router.snapshot.paramMap.get('id')
    console.log(id)
  }
}
