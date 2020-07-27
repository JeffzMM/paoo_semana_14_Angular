import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  textBotao = "Esconder/Exibir cursos"
  esconder = false;

  cursos = [
    {nome: "PHP", duracao : 4, periodo: "Noite"},
    {nome: "Angular", duracao : 4, periodo: "Tarde"},
    {nome: "Bootstrap", duracao : 1, periodo: "Manhã"},
    {nome: "HTML", duracao : 2, periodo: "Noite"},
    {nome: "CSS", duracao : 2, periodo: "Tarde"}
  ]

  alterarExibicao (){
    this.esconder = !this.esconder;
  } 



}
