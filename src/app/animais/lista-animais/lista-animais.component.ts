import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais!:Animais;

  constructor(
    private UsuarioService: UsuarioService,
    private animaisService: AnimaisService) { }

  ngOnInit(): void {
    this.UsuarioService.retornaUsuario().subscribe((usuario) => {
        const userName = usuario.name ?? '';
        this.animaisService.listaDoUsuario(userName).subscribe((animais) => {
          this.animais = animais;
        });
    });

  }

}
