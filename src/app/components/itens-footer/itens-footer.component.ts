import { Component } from '@angular/core';

@Component({
  selector: 'app-itens-footer',
  templateUrl: './itens-footer.component.html',
  styleUrls: ['./itens-footer.component.css']
})
export class ItensFooterComponent {
  count:string = "01";
  title:string = "Reviving Retro PCs";
  paragraph:string = "What happens when old PCs are givin modern upgrades?";


}
