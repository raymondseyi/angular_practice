import { Routes } from '@angular/router';
import { ManageProfilesComponent } from './manage-profiles/manage-profiles.component';
import { TailwindassComponent } from './tailwindass/tailwindass.component';
import { HomeComponent } from './home/home.component';
import { CoolDashboardComponent } from './cool-dashboard/cool-dashboard.component';

export const routes: Routes = [
    {
        path:"browse",
        component: ManageProfilesComponent
    },
    {
        path:"tailwindass",
        component:TailwindassComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"dashboard",
        component:CoolDashboardComponent
    }
];
    