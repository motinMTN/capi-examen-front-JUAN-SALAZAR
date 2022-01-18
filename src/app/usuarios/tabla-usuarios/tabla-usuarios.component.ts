import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  // usuarios: Usuario[] = [];
  usuarios:any;
  domicilio:any;

  constructor(
    private usuarioService:UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioService.ObtenerUsuarios().subscribe((respuesta) =>{
      console.log(respuesta);
      this.usuarios=respuesta;
    });
  }

  ageCalculator(edad:any){
    if(edad){
      const convertAge = new Date(edad);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      edad = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      return edad;
    }
  }

}
