import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  
  constructor(public fbobj : FormBuilder)
  {
  }

  MarvellousForm = this.fbobj.group(
    {
      
      username :['', [Validators.required, Validators.pattern('[a-zA-Z].*'),Validators.minLength(5)] ],
      email : ['',Validators.required,],
      phoneNumber : ['',[Validators.required, Validators.minLength(10),Validators.pattern('[0-9]*')] ],
      Address:['',Validators.required,Validators.minLength(5),],
      city : ['',[Validators.required,Validators.pattern('[a-zA-Z].*'),Validators.minLength(4)]],
      zipcode : ['',[Validators.required,] ],

      comments:['',[Validators.required,Validators.minLength(30),Validators.pattern('[a-zA-Z].*')] ],

      MarvellousClass : this.fbobj.group(
        {
          
          State : [''],   
        }
        
      )
      
    }
  );
  
  SetData()
  {
    this.MarvellousForm.setValue(
      {
        username : '',
        Email : '',
        ConfirmPass :  '',
        MarvellousClass : 
        {
        
        }
      }
    )
  }
  

}
