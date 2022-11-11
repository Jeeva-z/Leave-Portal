import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { DialogPosition, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
productForm !: FormGroup;
  constructor(private formBuilder : FormBuilder,  private api : ApiService, private dialogRef : MatDialogRef<LeaveComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      FromDate : ['',Validators.required],
      ToDate : ['',Validators.required],
      reason:['',Validators.required],
      Attendance:[Math.floor(Math.random() * 10) + 80 + "%"],
      Approval:['0']
    })
  }
  

  applyLeave(){
    if(this.productForm.valid){
      this.api.postLeave(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Leave has been added successfully");
          this.productForm.reset(); 
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while applying for a leave");

        }
      })
    }
  }

}
