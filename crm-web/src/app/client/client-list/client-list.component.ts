import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import { ClientCreateComponent } from '../client-create/client-create.component';


@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {

  displayedColumns: string[] = ['position', 'name', 'mobile', 'email', 'actions'];
  dataSource = new MatTableDataSource<Client>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openCreateClient(): void {
    const dialogRef = this.dialog.open(ClientCreateComponent, {
      width: '400px',
      disableClose: true,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Client created:', result);
      } else {
        console.log('Dialog closed without submission');
      }
    });
  }
}

export interface Client {
  name: string;
  position: number;
  mobile: number;
  email: string;
}

const ELEMENT_DATA: Client[] = [
  {position: 1, name: 'Hydrogen', mobile: 1.0079, email: 'H'},
  {position: 2, name: 'Helium', mobile: 4.0026, email: 'He'},
  {position: 3, name: 'Lithium', mobile: 6.941, email: 'Li'},
  {position: 4, name: 'Beryllium', mobile: 9.0122, email: 'Be'},
  {position: 5, name: 'Boron', mobile: 10.811, email: 'B'},
  {position: 6, name: 'Carbon', mobile: 12.0107, email: 'C'},
  {position: 7, name: 'Nitrogen', mobile: 14.0067, email: 'N'},
  {position: 8, name: 'Oxygen', mobile: 15.9994, email: 'O'},
  {position: 9, name: 'Fluorine', mobile: 18.9984, email: 'F'},
  {position: 10, name: 'Neon', mobile: 20.1797, email: 'Ne'},
  {position: 11, name: 'Sodium', mobile: 22.9897, email: 'Na'},
  {position: 12, name: 'Magnesium', mobile: 24.305, email: 'Mg'},
  {position: 13, name: 'Aluminum', mobile: 26.9815, email: 'Al'},
  {position: 14, name: 'Silicon', mobile: 28.0855, email: 'Si'},
  {position: 15, name: 'Phosphorus', mobile: 30.9738, email: 'P'},
  {position: 16, name: 'Sulfur', mobile: 32.065, email: 'S'},
  {position: 17, name: 'Chlorine', mobile: 35.453, email: 'Cl'},
  {position: 18, name: 'Argon', mobile: 39.948, email: 'Ar'},
  {position: 19, name: 'Potassium', mobile: 39.0983, email: 'K'},
  {position: 20, name: 'Calcium', mobile: 40.078, email: 'Ca'},
];

