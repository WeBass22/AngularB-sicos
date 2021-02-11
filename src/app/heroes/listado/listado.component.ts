import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Iron man', 'Hulk', 'Thor']
  listaBorrados: string = ''

  borrarHeroe(){
    this.listaBorrados = this.heroes.shift() || ''
    
    
  }

}
