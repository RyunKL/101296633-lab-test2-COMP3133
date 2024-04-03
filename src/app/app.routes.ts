import { NgModule } from '@angular/core';
import { Routes, RouterModule,  RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/missions', pathMatch: 'full' },
    { path: 'missions', component: MissionListComponent },
    { path: 'mission-details', component: MissionDetailsComponent }
];

