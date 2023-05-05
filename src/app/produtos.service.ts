import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;
  constructor() { }

  geAll(){
    return this.produtos;
  }

  getOne(ProdutoId: number){
    return this.produtos.find(produto => produto.id = ProdutoId)
  }
  
}
