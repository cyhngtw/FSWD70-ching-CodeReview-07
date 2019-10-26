import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelListComponent } from './travel-list/travel-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TravelComponent } from './travel/travel.component';
import { BlogComponent } from './blog/blog.component';
const routes: Routes = [

{

        path:"",component: HomepageComponent

},

{

        path: "travel",component: TravelComponent

},

{

        path: "blog",component: BlogComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }