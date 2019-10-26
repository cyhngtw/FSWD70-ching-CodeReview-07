import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
 providedIn: 'root'
})
export class TravelService {

 constructor(private firebase: AngularFireDatabase) { }
         travelList: AngularFireList<any>;

         form = new FormGroup({
     $key: new FormControl(null),
     lastName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
     email: new FormControl('', Validators.email),
     mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
     tourpackage: new FormControl('', [Validators.required, Validators.maxLength(1)]),
         });

         getTravels(){
                 this.travelList = this.firebase.list('travels');
                 return this.travelList.snapshotChanges();
         }
         insertTravel(travel){
                 this.travelList.push({
                 	     lastName: travel.lastName,
                         firstName: travel.firstName,
                         email: travel.email,
                         mobile: travel.mobile,
                         tourpackage:travel.tourpackage
                  });
         }

        populateForm(travel){
        this.form.setValue(travel);
          }

          updateTravel(travel){
            this.travelList.update(travel.$key,{
            lastName: travel.lastName,
            firstName: travel.firstName,
            email: travel.email,
            mobile: travel.mobile,
            location:travel.location
    });
  }

        deleteTravel($key: string){
            this.travelList.remove($key);
           }
}