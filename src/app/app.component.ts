import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Persona } from './interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'examen';
  lista: string[]= [`Ecuador`, 'Brasil', 'Uruguay', `Venezuela`, `Argentina`];
  persona: Persona = {nombre:'Alex', edad:23};
  personaGuardar: Persona = this.persona
  itemEliminado: string| undefined
  mensajeEliminacion: string | undefined;


  eliminarItem() {
    const ultimoElemento = this.lista.pop();
    if (ultimoElemento) {
      this.mensajeEliminacion = `El pais : ${ultimoElemento} se ha eliminado de la lista`
    }
  }

  reset() {
    this.persona = { nombre: 'Alex', edad: 23 };
  }

  cambiarPersona(){
    this.persona = {nombre:`Steeven`, edad: 12}
  }




}
