import { Component } from '@angular/core';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent {
  listeEmplois = [ 
    {reference: '1', titre: 'Développeur', entreprise: 'Actia', etat: true},
     {reference: '2', titre: 'Ingénieur', entreprise: 'HP', etat: false}
    ];
  
  }  
  


