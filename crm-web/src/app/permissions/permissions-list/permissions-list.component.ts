import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-permissions-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatExpansionModule, MatInputModule, MatFormFieldModule,MatPaginatorModule, MatTableModule, MatIconModule],
  templateUrl: './permissions-list.component.html',
  styleUrl: './permissions-list.component.css'
})
export class PermissionsListComponent {

  displayedColumns: string[] = ['id', 'permission', 'actions'];
  dataSource = new MatTableDataSource<Permission>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Permission {
  permission: string;
  id: number;
}

const ELEMENT_DATA: Permission[] = [
  {id: 1, permission: 'Hydrogen'},
  {id: 2, permission: 'Helium'},
  {id: 3, permission: 'Lithium'},
  {id: 4, permission: 'Beryllium'},
  {id: 5, permission: 'Boron'},
  {id: 6, permission: 'Carbon'},
  {id: 7, permission: 'Nitrogen'},
  {id: 8, permission: 'Oxygen'},
  {id: 9, permission: 'Fluorine'},
  {id: 10, permission: 'Neon'},
  {id: 11, permission: 'Sodium'},
  {id: 12, permission: 'Magnesium'},
  {id: 13, permission: 'Aluminum'},
  {id: 14, permission: 'Silicon'},
  {id: 15, permission: 'Phosphorus'},
  {id: 16, permission: 'Sulfur'},
  {id: 17, permission: 'Chlorine'},
  {id: 18, permission: 'Argon'},
  {id: 19, permission: 'Potassium'},
  {id: 20, permission: 'Calcium'},
];