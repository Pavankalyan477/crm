import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-client-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    NgxMatSelectSearchModule
  ],
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit, OnDestroy {
  clientForm!: FormGroup;
  rolesList = ['Admin', 'User', 'Viewer'];
  localCodes = ['LOC001', 'LOC002', 'LOC003', 'LOC004'];
  localCodeFilterCtrl = new FormControl();
  filteredLocalCodes = new ReplaySubject<string[]>(1);
  private _onDestroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ClientCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      localCode: ['', Validators.required],
      contact: ['', Validators.required],
      roles: [[], Validators.required],
    });

    if (this.data?.client) {
      this.clientForm.patchValue(this.data.client);
    }

    this.filteredLocalCodes.next(this.localCodes.slice());

    this.localCodeFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(search => this.filterLocalCodes(search));
  }

  private filterLocalCodes(search: string) {
    if (!search) {
      this.filteredLocalCodes.next(this.localCodes.slice());
      return;
    }
    const filter = search.toLowerCase();
    this.filteredLocalCodes.next(
      this.localCodes.filter(code => code.toLowerCase().includes(filter))
    );
  }

  submit(): void {
    if (this.clientForm.valid) {
      this.dialogRef.close(this.clientForm.value);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
