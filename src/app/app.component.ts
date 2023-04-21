import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  addPersonnelForm = new FormGroup({
    addSelect: new FormControl(),
  });
  removePersonnelForm = new FormGroup({
    removeSelect: new FormControl(),
  });

  entityUsers = [
    { Id: 1, ItemName: 'user0' },
    { Id: 2, ItemName: 'user1' },
    { Id: 3, ItemName: 'user2' },
    { Id: 4, ItemName: 'user3' },
    { Id: 5, ItemName: 'user4' },
    { Id: 6, ItemName: 'user5' },
    { Id: 7, ItemName: 'user6' },
    { Id: 8, ItemName: 'user7' },
    { Id: 9, ItemName: 'user8' },
  ];

  userGroups = [
    { Id: 1, ItemName: 'userA' },
    { Id: 2, ItemName: 'userB' },
    { Id: 3, ItemName: 'userC' },
    { Id: 4, ItemName: 'userD' },
    { Id: 5, ItemName: 'userE' },
    { Id: 6, ItemName: 'userF' },
    { Id: 7, ItemName: 'userG' },
    { Id: 8, ItemName: 'userH' },
    { Id: 9, ItemName: 'userK' },
  ];

  setDefaults() {
    this.addPersonnelForm.get('addSelect').patchValue(null);
    this.removePersonnelForm.get('removeSelect').patchValue(null);
  }

  addUser() {
    let selectedUser = this.addPersonnelForm.value.addSelect;
    this.userGroups.push(selectedUser);
    let index = this.entityUsers.indexOf(selectedUser);
    this.entityUsers.splice(index, 1);
    this.setDefaults();
  }

  addAll() {
    let selectedUser = this.addPersonnelForm.value.addSelect;
    this.userGroups.push(selectedUser);
    let index = this.entityUsers.indexOf(selectedUser);
    this.entityUsers.splice(index, 1);
    this.setDefaults();
  }

  removeUser() {
    let selectedUser = this.removePersonnelForm.value.removeSelect;
    this.entityUsers.push(selectedUser);
    let index = this.userGroups.indexOf(selectedUser);
    this.userGroups.splice(index, 1);
    this.setDefaults();
  }

  removeAll() {
    let selectedUser = this.removePersonnelForm.value.removeSelect;
    this.entityUsers.push(selectedUser);
    let index = this.userGroups.indexOf(selectedUser);
    this.userGroups.splice(index, 1);
    this.setDefaults();
  }
}
