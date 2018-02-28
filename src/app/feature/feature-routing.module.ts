import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { ProductModule } from './product/product.module';
import { ProductComponent } from './product/product/product.component';

const featureRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductComponent,}
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