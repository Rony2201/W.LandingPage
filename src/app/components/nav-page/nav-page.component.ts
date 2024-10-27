import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-page',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.css']
})
export class NavPageComponent implements OnInit{

  @Input()
  photoCover:string = "";
  @Input()
  bigTitle:string = "";
  @Input()
  description:string = ""
  @Input()
  buttonTitle:string = "";

ngOnInit(): void {
  
}

}
