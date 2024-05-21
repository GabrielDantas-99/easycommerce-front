import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisaoGeralComponent } from './visao-geral/visao-geral.component';
import { VendasComponent } from './vendas/vendas.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    VisaoGeralComponent,
    VendasComponent,
    ProdutosComponent,
    CategoriasComponent,
    ClientesComponent,
    ConfiguracoesComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ComponentsModule
  ]
})
export class PagesModule { }
