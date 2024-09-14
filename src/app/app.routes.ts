import { Routes } from '@angular/router';
import { ManageProfilesComponent } from './manage-profiles/manage-profiles.component';
import { TailwindassComponent } from './tailwindass/tailwindass.component';

export const routes: Routes = [
    {
        path:"browse",
        component: ManageProfilesComponent
    },
    {
        path:"tailwindass",
        component:TailwindassComponent
    }
];
