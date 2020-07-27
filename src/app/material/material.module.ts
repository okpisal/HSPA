import { NgModule } from '@angular/core';
import{MatButtonModule} from '@angular/material/button';



const MaterialComponets=[MatButtonModule];
@NgModule({
  declarations: [],
  imports: [
    MaterialComponets
  ],
  exports:[
    MaterialComponets
  ]
})
export class MaterialModule { }
