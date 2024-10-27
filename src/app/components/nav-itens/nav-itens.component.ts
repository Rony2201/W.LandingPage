import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-itens',
  templateUrl: './nav-itens.component.html',
  styleUrls: ['./nav-itens.component.css']
})
export class NavItensComponent {
  title:string = "New";
  paragraph:string = "Hydrogen VS Eletric Cars";
  description:string = "Will hydrogen-fueled cars ever catch up to EVs?"

}
