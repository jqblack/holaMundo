import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{

  frase: any = {
    mensaje:'Black Star learn more',
    autor: 'Randiel Arias'
};
  mostrar: Boolean = true;

  personajes: String[] = ['Naruto','Luffy','Zoro','Black Star'];
}
