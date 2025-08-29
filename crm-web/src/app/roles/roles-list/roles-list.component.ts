import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-roles-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatPaginatorModule, MatTableModule, MatIconModule],
  templateUrl: './roles-list.component.html',
  styleUrl: './roles-list.component.css'
})
export class RolesListComponent {
  displayedColumns: string[] = ['id', 'role', 'actions'];
    dataSource = new MatTableDataSource<Role>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
}

export interface Role {
  role: string;
  id: number;
}

const ELEMENT_DATA: Role[] = [
  {id: 1, role: 'Hydrogen'},
  {id: 2, role: 'Helium'},
  {id: 3, role: 'Lithium'},
  {id: 4, role: 'Beryllium'},
  {id: 5, role: 'Boron'},
  {id: 6, role: 'Carbon'},
  {id: 7, role: 'Nitrogen'},
  {id: 8, role: 'Oxygen'},
  {id: 9, role: 'Fluorine'},
  {id: 10, role: 'Neon'},
  {id: 11, role: 'Sodium'},
  {id: 12, role: 'Magnesium'},
  {id: 13, role: 'Aluminum'},
  {id: 14, role: 'Silicon'},
  {id: 15, role: 'Phosphorus'},
  {id: 16, role: 'Sulfur'},
  {id: 17, role: 'Chlorine'},
  {id: 18, role: 'Argon'},
  {id: 19, role: 'Potassium'},
  {id: 20, role: 'Calcium'},
];
