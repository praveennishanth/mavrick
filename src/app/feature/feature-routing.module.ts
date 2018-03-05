import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { ProductModule } from './product/product.module';
import { ProductComponent } from './product/product/product.component';
import { RegisterModule } from './register/register.module'
import { RegisterComponent } from './register/register/register.component'

import { GuardService } from '../core/guard.service'
import { CoreModule } from '../core/core.module'


const featureRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [GuardService]  },
    { path: 'product', component: ProductComponent, canActivate: [GuardService]},
    { path: 'register', component: RegisterComponent,}
];

@NgModule({
    imports: [
        RouterModule.forChild(featureRoutes),
        CoreModule
    ],
    providers:[GuardService],
    exports: [
        RouterModule
    ]
})

export class FeatureRoutingModule { }