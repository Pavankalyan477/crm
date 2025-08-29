import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { PermissionsListComponent } from './permissions/permissions-list/permissions-list.component';
import { TenantsListComponent } from './tenants/tenants-list/tenants-list.component';

const dashboardChildren: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'clients' },
  { path: 'clients', component: ClientListComponent },
  { path: 'roles', component: RolesListComponent },
  { path: 'permissions', component: PermissionsListComponent },
  { path: 'tenants', component: TenantsListComponent }
];

const mainComponentChildren: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent, children: dashboardChildren }
];

export const routes: Routes = [
    { path: '', component: MainComponent, children: mainComponentChildren }
];
