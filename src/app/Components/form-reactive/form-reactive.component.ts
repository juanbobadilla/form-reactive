import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Persona } from 'src/app/models/persona';


@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.persona.unshift;
  }

  ngOnInit(): void {
  }


  //propiedades - variables
  persona: Persona[] = [];


  //validaciones para formularios reactivos
  reguistros = this.formBuilder.group({
    nombre: ['',Validators.required],
    clave: ['', Validators.required],
    producto: ['', Validators.required],
    suscripcion: [true]
  });

  get nombreInvalidate() {
    return this.reguistros.get('nombre');
  }
  get claveInvalidate() {
    return this.reguistros.get('clave');
  }
  get productoInvalidate() {
    return this.reguistros.get('producto');
  }

  

  //metodos
  
  submit() {
    if (!this.reguistros.valid) {
      alert("ingrese todos los datos");
      return;
    } else {
      this.persona.push(new Persona(
        this.reguistros.value.nombre.trim(),
        this.reguistros.value.clave,
        this.reguistros.value.producto,
        this.reguistros.value.suscripcion,
        this.persona.length
      ))
      alert("datos ingresado correctamente");
      this.reguistros.setValue({
        nombre: [''],
        clave: [''],
        producto: [''],
        suscripcion: [true]
      });
    }

  }


}
