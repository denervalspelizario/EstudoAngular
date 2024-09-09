import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-component13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './component13.component.html',
  styleUrls: ['./component13.component.css'] // Correção do nome do arquivo para 'styleUrls'
})
export class Component13Component implements OnInit {

  // Vetor
  vetor: Produto[] = [];

  // Visibilidade dos botões
  btnCadastrar: boolean = true;

  // Objeto de formulário
  formulario = new FormGroup({
    id: new FormControl<number | null>(null),
    nome: new FormControl<string | null>(null),
    valor: new FormControl<number | null>(null)
  });

  // Construtor
  constructor(private servico: ProdutoService) { }

  // Inicialização do componente
  ngOnInit() {
    this.selecionar();
  }

  // Método para selecionar todos os produtos
  selecionar() {
    this.servico.selecionar().subscribe(retorno => {
      this.vetor = retorno;
    });
  }

  // Método para cadastrar produtos
  cadastrar() {
    this.servico.cadastrar(this.formulario.value as Produto)
      .subscribe(retorno => {
        this.vetor.push(retorno);
        this.formulario.reset();
      });
  }

  // Método para selecionar um produto específico
  selecionarProduto(indice: number) {
    const produto = this.vetor[indice];

    if (produto) {
      this.formulario.patchValue({
        id: produto.id ?? null,
        nome: produto.nome ?? null,
        valor: produto.valor ?? null
      });

      this.btnCadastrar = false;
    }
  }

  // Método para alterar produtos
  alterar(){
    this.servico.alterar(this.formulario.value as Produto)
    .subscribe(retorno => {

      // Obter o indice do objeto alterado
      let indiceAlterado = this.vetor.findIndex(obj => {
        return this.formulario.value.id === obj.id;
      });

      // alterar o retorno
      this.vetor[indiceAlterado] = retorno;

      // Limpar o formulário
      this.formulario.reset();

      // Visibilidade dos botões
      this.btnCadastrar = true;
    });
  }

  // Metodo remover
  remover(){

    // obtendo id do item que sera exlcuido e ajustando a tipagem
    const id = this.formulario.value.id as number;  // Força o tipo para number

    // usando o metodo para remover
    this.servico.remover(id)
    .subscribe(() => {

      // Obter o indice do vetor que será removido
      let indiceRemovido = this.vetor.findIndex(obj => {
        return obj.id === this.formulario.value.id;
      });

      // Removendo o objeto do vetor
      // apartir da posicao do indice removido quero remover 1 item
      this.vetor.splice(indiceRemovido, 1);

      // Limpando formuário
      this.formulario.reset();

      // Visibilidade dos botões
      this.btnCadastrar = true;

    });
  }
}
