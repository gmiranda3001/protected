import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email:any;
  public password:any;
  public name:any;
  public telefono:any;
  public pais:any;

  constructor(
    public fireService:FireserviceService
  ) { }

  ngOnInit() {
  }

  signup(){ 
    this.fireService.signup({email:this.email,password:this.password}).then(res=>{
      if(res.user.uid){
        let data = {
          email:this.email,
          password:this.password,
          name:this.name,
          telefono:this.telefono,
          pais:this.pais,
          uid:res.user.uid
        }
        this.fireService.saveDetails(data).then(res=>{
         alert('Cuenta creada con exito');
        },err=>{
          console.log(err);
        })
      }
    },err=>{
      alert('Tu cuenta existe, por favor crear otra, recordá que la contraseña debe ser mas de 6 caracteres');
      // err.message

      console.log(err);
    })
  }

}
