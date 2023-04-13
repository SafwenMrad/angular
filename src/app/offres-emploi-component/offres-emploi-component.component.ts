import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  

    public calculerBilan(): void {
      let nbNonCloturees = 0;
      for (const offre of this.listeEmplois) {
        if (!offre.etat) {
          nbNonCloturees++;
        }
      }
      alert(`${nbNonCloturees} offres d'emploi non clôturées.`);
    }
    

    public recherche: string = '';

    public chercherEmploi(): void {
      if (this.recherche) {
        this.listeEmplois = this.listeEmplois.filter(offre => offre.entreprise.toLowerCase().includes(this.recherche.toLowerCase()));
      } else {
        this.listeEmplois = [...this.listeEmplois];
      }
    }
    


  }  
  


