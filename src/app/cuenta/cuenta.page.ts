import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';
import { profile } from './cuenta.model';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: FireserviceService
  ) { }

   ngOnInit() {
  }
  goToHome(){
    this.router.navigate(['/home'])
  }
}
