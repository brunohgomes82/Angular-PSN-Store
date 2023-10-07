import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

	@Input()
	gameType:string="Digital PS4"
	@Input()
	gamePryce:string="R$ 399,99"

	constructor() { }

  ngOnInit(): void {
  }

}
