import { Component, OnInit } from '@angular/core';
import { RecepieService } from 'src/app/services/recepie.service';
import { Recepie } from '../../models/recepie.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  currentRecepie: Recepie;

  constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {
    this.recepieService.selectedRecepie
    .subscribe((data: Recepie) => {
      this.currentRecepie = data;
    })
  }

}
