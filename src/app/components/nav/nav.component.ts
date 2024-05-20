import { Component } from '@angular/core';
import { NavLink } from 'src/app/interfaces/navlink.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  navLinks: NavLink[] = [
    { title: 'Visão Geral', icon: 'home', route: 'visao-geral' },
    { title: 'Vendas', icon: 'inventory', route: 'vendas' },
    { title: 'Produtos', icon: 'shopping_cart', route: 'produtos' },
    { title: 'Categorias', icon: 'sell', route: 'categorias' },
    { title: 'Clientes', icon: 'group', route: 'clientes' },
    { title: 'Configurações', icon: 'tune', route: 'configuracoes' },
  ]

}
