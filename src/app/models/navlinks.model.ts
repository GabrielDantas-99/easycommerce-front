import { NavLink } from "../interfaces/navlink.interface";

export const NavLinks: NavLink[] = [
  { title: 'Visão Geral', icon: 'home', route: 'visao-geral' },
  { title: 'Vendas', icon: 'inventory', route: 'vendas' },
  { title: 'Produtos', icon: 'shopping_cart', route: 'produtos' },
  { title: 'Categorias', icon: 'sell', route: 'categorias' },
  { title: 'Clientes', icon: 'group', route: 'clientes' },
  { title: 'Configurações', icon: 'tune', route: 'configuracoes' },
];
