import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import {FormReactiveComponent} from '../form-reactive/form-reactive.component';

@Component({
  selector: 'app-dato',
  templateUrl: './dato.component.html',
  styleUrls: ['./dato.component.css']
})
export class DatoComponent implements OnInit {
  //entrada de tipo Input
  @Input() dato:Persona;

  constructor(private form: FormReactiveComponent) {
  }

  ngOnInit(): void {

  }



  //metodos

  delete(item:number){
    for (let i = 0; i < this.form.persona.length; i++) {
      if (item==this.form.persona[i].id) {
        if(confirm("Realmente desea eliminar este reguistro ? ")){
          this.form.persona.splice(i, 1);
        }
      }
    }
  }

}
