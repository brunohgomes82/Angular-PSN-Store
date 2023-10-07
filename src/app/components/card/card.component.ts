import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	gameCover:string=""
	@Input()
	gameLabel:string=""
	@Input()
	gameType:string="XPTO | PS4"
	@Input()
	gamePryce:string="R$ 399,99"

	constructor() { }

  ngOnInit(): void {
  }

}