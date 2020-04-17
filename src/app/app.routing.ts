import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CreateproductComponent} from './components/createproduct/createproduct.component';
import {LookproductsComponent} from './components/lookproducts/lookproducts.component';
import {UpdateproductsComponent} from './components/updateproducts/updateproducts.component';
import {DeleteproductsComponent} from './components/deleteproducts/deleteproducts.component';
import { ProductComponent } from './components/product/product.component';

const approutes: Routes = [

    {path: 'create', component:CreateproductComponent},//Ruta Inicial
    {path: 'read',component:LookproductsComponent},
    {path: 'update',component:UpdateproductsComponent},
    {path: 'delete',component:DeleteproductsComponent},
    {path: 'product/product/:id',component:ProductComponent}
    
    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(approutes);


