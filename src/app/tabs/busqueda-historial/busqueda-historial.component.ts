import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaHistorial } from 'src/app/service/HistorialRequest';

@Component({
    selector: 'app-busqueda-historial',
    templateUrl: './busqueda-historial.component.html',
    styleUrls: ['./busqueda-historial.component.scss'],
})
export class BusquedaHistorialComponent implements OnInit {
    @Output() filtrar = new EventEmitter<ConsultaHistorial>();

    public reactiveForm: FormGroup;
    public hoy: Date = new Date();

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.reactiveForm = this.fb.group({
            fechadesde: [null, Validators.required],
            fechaasta: [null, Validators.required],
        });
    }

    onFilter() {
        if (this.reactiveForm?.valid) {
            this.filtrar.emit(this.reactiveForm.value);
        }
    }
}
