import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { ProductModule } from './product/product.module';
import { ProductComponent } from './product/product/product.component';
import { RegisterModule } from './register/register.module'
import { RegisterComponent } from './register/register/register.component'

const featureRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductComponent,},
    { path: 'register', component: RegisterComponent,}
];

@NgModule({
    imports: [
        RouterModule.forChild(featureRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class FeatureRoutingModule { }