import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-people-grid',
  templateUrl: './add-people-grid.component.html',
  styleUrls: ['./add-people-grid.component.scss']
})
export class AddPeopleGridComponent{
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      personas: this.formBuilder.array([])
    });

    // Agregar al menos una persona al inicio
    this.agregarPersona();
  }

  get personasFormArray() {
    return this.formulario.get('personas') as FormArray;
  }

  agregarPersona() {
    const persona = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.personasFormArray.push(persona);
  }

  eliminarPersona(index: number) {
    this.personasFormArray.removeAt(index);
  }

  onSubmit() {
    console.log(this.formulario)
  }
}
