import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itens-footer',
  templateUrl: './itens-footer.component.html',
  styleUrls: ['./itens-footer.component.css']
})
export class ItensFooterComponent {

  @Input()
  photoCover:string = "";
  @Input()
  count:string = "";
  @Input()
  title:string = "";
  @Input()
  paragraph:string = "";

  constructor() {}

  ngOnInit(): void {
    
  }



}
