import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recepie } from '../../../../models/recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recepie: Recepie;
  @Input() index: number;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
