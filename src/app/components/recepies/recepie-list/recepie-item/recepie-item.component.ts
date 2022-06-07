import { Component, Input, OnInit } from '@angular/core';
import { RecepieService } from 'src/app/services/recepie.service';
import { Recepie } from '../../recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recepie: Recepie;

  constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {
  }

  sendDetails() {
    this.recepieService.selectedRecepie.emit(this.recepie);
  }

}
