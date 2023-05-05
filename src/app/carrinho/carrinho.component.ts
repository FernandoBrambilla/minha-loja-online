import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  itensCarrinho: IProdutoCarrinho[]=[];
  constructor(
    public carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void{
    this.itensCarrinho = this.carrinhoService.obterCarrinho();

  }
}
