import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecepieService } from 'src/app/services/recepie.service';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[] = [];

  constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {
    this.recepies = this.recepieService.getRecepies();
  }

}
