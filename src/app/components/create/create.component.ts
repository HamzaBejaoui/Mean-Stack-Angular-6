import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdunitService} from '../../adunit.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adunitservice: AdunitService, private fb: FormBuilder, 
  private http : HttpClient) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      unit_name: ['', Validators.required ],
      unit_price: ['', Validators.required ]
   });
  }

  addAdUnit(unit_name, unit_price) {
    console.log(unit_name);
    console.log(unit_price);
    this.adunitservice.addAdUnit(unit_name, unit_price).subscribe(data=>{
    console.log(data)});
}

  ngOnInit() {
    
  }
}
