import { Component, OnInit } from '@angular/core';
import { TravelService  } from "../shared/travel.service";
import { ReactiveFormsModule ,FormsModule} from "@angular/forms";

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

 constructor(private travelService: TravelService) { }
 submitted: boolean;
 formControls = this.travelService.form.controls;
 showSuccessMessage: boolean;
 searchText:string = "";
 ngOnInit() {
 }

onSubmit(){
         this.submitted = true;
         if(this.travelService.form.valid){
     if(this.travelService.form.get('$key').value == null)
       this.travelService.insertTravel(this.travelService.form.value);
     else 
        this.travelService.updateTravel(this.travelService.form.value);
      this.showSuccessMessage = true;
     setTimeout(()=> this.showSuccessMessage=false,3000);
     this.submitted = false;
     this.travelService.form.reset();
     }
         }
}