import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../../models/transaction';
import { SharedService } from 'src/app/modules/shared/shared-service.service';

@Component({
  selector: 'add-people-grid',
  templateUrl: './add-people-grid.component.html',
  styleUrls: ['./add-people-grid.component.scss'],
})
export class AddPeopleGridComponent {
  formulario!: FormGroup;
  isEmptyForm: boolean = false;
  transactions: Transaction[] = [];
  showResetButton: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      personas: this.formBuilder.array([]),
    });
    this.agregarPersona();
    this.agregarPersona();
    //this.generarCuentas([]);
  }

  get personasFormArray() {
    return this.formulario.get('personas') as FormArray;
  }

  agregarPersona() {
    if(!this.showResetButton){
      const persona = this.formBuilder.group({
        name: ['', Validators.required],
        amount: ['', [Validators.required]],
      });
      this.personasFormArray.push(persona);
    }
  }

  eliminarPersona(index: number) {
    this.personasFormArray.removeAt(index);
  }

  generarCuentas(personas: { name: string; amount: number }[]) {
    /* personas = [
      { name: 'Juan', amount: 3520 },
      { name: 'Enrique', amount: 2531 },
      { name: 'Roberto', amount: 4561 },
      { name: 'Andres', amount: 500 },
      { name: 'Raul', amount: 250 },
    ]; */

    const totalAmount = personas.reduce(
      (total, persona) => total + Number(persona.amount),
      0
    );

    const promedio = totalAmount / personas.length;

    let acreedores: { name: string; amount: number }[] = [];
    let deudores: { name: string; amount: number }[] = [];

    let transactions: Transaction[] = [];

    const deudas = personas.map((persona) => {
      return {
        name: persona.name,
        amount: persona.amount - promedio,
      };
    });

    deudas.forEach((deuda) => {
      if (deuda.amount > 0) {
        acreedores.push(deuda);
      } else {
        deudores.push(deuda);
      }
    });

    deudores = deudores.map((deuda) => {
      return {
        name: deuda.name,
        amount: deuda.amount * -1,
      };
    });

    deudores.forEach((deudor) => {
      acreedores.forEach((acreedor) => {
        if (acreedor.amount > 0 && deudor.amount > 0) {
          const pago = Math.min(deudor.amount, acreedor.amount);
          acreedor.amount -= pago;
          deudor.amount -= pago;

          transactions.push({
            creditor: acreedor.name,
            debtor: deudor.name,
            amount: pago,
          });
        }
      });
    });
    this.sharedService.setSharedVariable(transactions);
    this.showResetButton = true;
  }

  resetForm(){
    this.personasFormArray.reset();
    this.sharedService.setSharedVariable([]);
    this.showResetButton = false;
  }
}
