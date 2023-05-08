import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  formContato = this.formBuilder.group({
    nome:["", [
      Validators.minLength(4),
      Validators.required
    ]],
    assunto:["", [
      Validators.minLength(10),
      Validators.required
    ]], 
    telefone:["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email:["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
  })
  
  constructor(
    private formBuilder: FormBuilder
  ){}

  enviarFormulario(){
    alert("Sua Mensagem foi enviada com sucesso! Entraremos em contato o mais breve possível. " )
    this.formContato.reset();
  }
}
