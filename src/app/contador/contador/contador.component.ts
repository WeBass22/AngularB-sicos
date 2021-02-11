import { Component } from "@angular/core";


@Component({
   selector: 'app-contador',
   template: ` 
   
   <h1>{{title}}</h1>


   <h3>la base es {{base}}</h3>
   
   <span>{{value}}</span>
   <hr />
   <button (click) = "acumular(base)">+{{base}}</button>
   <button (click) = "acumular(-base)">-{{base}}</button> 
   `
})



export class ContadorComponent{
    title:string = 'Contador App';
    value:number = 0
    base: number = 5
  
      acumular(numero: number){
         this.value += numero
      
     }
  
} 