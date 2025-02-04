import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})


export class UserFormComponent {
  character = {
    name: '',
    gender: '',
    class: '',
    race: '',
    age: null,
    color: '#673ab7',
    bodyType: 'average',
    skinColor: '#ffdbac',
    hairStyle: 'short',
    armorType: 'leather',
    hueRotation: 0
  };

  hairStyles = ['short', 'long', 'ponytail', 'mohawk', 'braided'];
  armorTypes = ['leather', 'chainmail', 'plate', 'robes', 'none'];
}

