import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MotoristaComponent } from './motorista/motorista.component';
import { ProdutoComponent } from './produto/produto.component';
import { ApploginComponent } from './applogin/applogin.component';

// Rotas
const appRoutes: Routes = [
  { path: 'produto', component: ProdutoComponent },
  { path: 'motorista', component: MotoristaComponent },
  { path: 'login', component: ApploginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
