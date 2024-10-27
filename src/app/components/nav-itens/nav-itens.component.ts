import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-itens',
  templateUrl: './nav-itens.component.html',
  styleUrls: ['./nav-itens.component.css']
})
export class NavItensComponent implements OnInit{

  @Input()
  title:string = "";
  @Input()
  paragraph:string = "";
  @Input()
  description:string = ""

  constructor() {}



  ngOnInit(): void {
    
  }

}
