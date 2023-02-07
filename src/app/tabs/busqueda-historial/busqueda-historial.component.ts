import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-busqueda-historial',
    templateUrl: './busqueda-historial.component.html',
    styleUrls: ['./busqueda-historial.component.scss'],
})
export class BusquedaHistorialComponent implements OnInit {
    @Output() filtrar = new EventEmitter<{
        desde: Date;
        hasta: Date;
    }>();

    public reactiveForm: FormGroup;
    public hoy: Date = new Date();

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.reactiveForm = this.fb.group({
            desde: [null, Validators.required],
            hasta: [null, Validators.required],
        });
    }

    onFilter(){
        if(this.reactiveForm?.valid){
            this.filtrar.emit(this.reactiveForm.value);
        }
    }
}
