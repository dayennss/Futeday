import { Component, OnInit } from '@angular/core';
import { Campeonatos, Campeonatos2 } from 'src/app/models-campeonatos/campeonato/campeonatos';
import { CampeonatosService } from 'src/app/services/campeonatos.service';
import {dataInformacaoHome} from 'src/app/models-campeonatos/infos/infos-home'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  InformacoesHome:dataInformacaoHome[];

  idCampeonatos =  [2013];
  campeonato = {} as Campeonatos2;
  campeonatos: Campeonatos2[] = [];
   
  constructor(private campeonatosService: CampeonatosService) { }
  ngOnInit() {
    this.getAllCampeonatos();
    
    this.InformacoesHome = [
      {
        id : 1,
        sentence : "Classificação atualizada."
      },
      {
        id: 2,
        sentence: "Acompanhe os maiores goleadores da rodada."
      },
      {
        id: 3,
        sentence: "Times atualizados."
      },
      {
        id: 4,
        sentence: "Informações sobre o campeonato."
      },
      {
        id: 5,
        sentence: "Informações sobre os jogos."
      }
    ]
    
    
    
  }
  getAllCampeonatos() {
    this.idCampeonatos.forEach(element => {
      this.campeonatosService.getCampeonatoById(element).subscribe((campeonatos:Campeonatos2) => {
        this.campeonatos.push(campeonatos)
      })  
    });

    
  }
  



  // // Chama o serviço para obtém todos os campeonatos.
  // getCampeonato() {
  //   this.campeonatosService.getCampeonato().subscribe((campeonatos: Campeonatos[]) => {
  //     this.campeonatos = campeonatos
  //     console.log(campeonatos)
  //   });
  // }
}
