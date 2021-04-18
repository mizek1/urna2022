import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  teclado: number[] = [1, 2, 3, 4, 5, 6,7, 8, 9, 0];
  funcoes: string[] = ['BRANCO', 'CORRIGE', 'CONFIRMA']
  numeroVotado!: number;
  status!:string;
  pressionouNumero = 0;
  telaFim: boolean = false;

  setClassesBotaoFuncao(val: string) {
    switch (val) {
      case 'BRANCO':
        return 'botao-funcao botao-branco';
      case 'CONFIRMA':
        return 'botao-funcao botao-confirma';
      case 'CORRIGE':
        return 'botao-funcao botao-corrige';
      default:
        return 'botao-funcao'
    }
  }

  constructor() { }

  ngOnInit() {
    this.validaCandidato();
    this.comecaVotacao();
  }

  comecaVotacao() {
    this.numeroVotado = 0;
    status = 'DIGITE UM CANDIDATO VÁLIDO'
  }

  apertaNumero(idx: number) {
    if (this.pressionouNumero < 2) {
      if(this.numeroVotado < 10) {
        this.numeroVotado += this.teclado[idx] * 10;
      } else {
        this.numeroVotado += this.teclado[idx];
      }
      this.pressionouNumero++;
      this.validaCandidato();
    }
  }

  validaCandidato() {
    switch (this.numeroVotado) {
      case 13:
        this.status = 'LUIS INÁCIO LULA DA SILVA'
        break;
      case 17:
        this.status = 'VOCÊ TEM CERTEZA?'
        break;
      default:
        this.status = 'DIGITE UM CANDIDATO VÁLIDO'
        break;
    }
  }

  apertaFuncao(val: string) {
    if (val == 'CORRIGE' || val == 'BRANCO') {
      this.pressionouNumero = 0;
      this.numeroVotado = 0;
      this.status = 'DIGITE UM CANDIDATO VÁLIDO'
      this.telaFim = false
    } else if (val == 'CONFIRMA') {
      this.numeroVotado = 13;
      this.status = 'LUÍS INÁCIO LULA DA SILVA'
      this.telaFim = true
    }
  }

}
