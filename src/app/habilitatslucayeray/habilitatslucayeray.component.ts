import {Component, Input} from '@angular/core';
import { HomelucayerayComponent } from '../homelucayeray/homelucayeray.component';

@Component({
  selector: 'app-habilitatslucayeray',
  standalone: true,
  imports: [HomelucayerayComponent],
  templateUrl: './habilitatslucayeray.component.html',
  styleUrl: './habilitatslucayeray.component.css'
})
export class HabilitatslucayerayComponent {
  @Input() pokemonData: any;
}
