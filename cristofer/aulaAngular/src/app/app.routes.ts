import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { SithsComponent } from './siths/siths.component';
import { FerrariComponent } from './ferrari/ferrari.component';

export const ROUTES: Routes = [
    { path: 'students', component: BodyComponent },
    { path: 'siths', component: SithsComponent },
    { path: 'ferrari', component: FerrariComponent }
];
