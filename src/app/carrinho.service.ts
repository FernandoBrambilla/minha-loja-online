import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obterCarrinho(){
    this.itens =JSON.parse(localStorage.getItem("carrinho")|| "[]");
    return this.itens;
  }

  addCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  removerItemCarrinho( produtoId: number){
    this.itens = this.itens.filter(iten => iten.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));

  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
