import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { VisaoGeralComponent } from './pages/visao-geral/visao-geral.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'visao-geral' },
  {
    path: '',   component: SidebarComponent, children: [
      { path: 'visao-geral', component: VisaoGeralComponent },
      { path: 'vendas', component: VendasComponent },
      { path: 'produtos', component: ProdutosComponent },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'configuracoes', component: ConfiguracoesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
