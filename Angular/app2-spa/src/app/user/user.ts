import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface UserInterface {
  id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {
  constructor(private router: Router) {}
  // Signals to store state
  users = signal<UserInterface[]>([
    { id: 1, name: 'Murali', email: 'murali@example.com' },
    { id: 2, name: 'Rahul', email: 'rahul@example.com' },
  ]);

  newUser: UserInterface = { id: 0, name: '', email: '' };
  editMode = false;
  editId: number | null = null;

  addUser() {
    if (this.newUser.name && this.newUser.email) {
      const id = this.users().length + 1;
      this.users.update((list) => [...list, { ...this.newUser, id }]);
      this.newUser = { id: 0, name: '', email: '' };
    }
  }

  deleteUser(id: number) {
    this.router.navigate(['/delete', id]);
    // this.users.update((list) => list.filter((u) => u.id !== id));
  }

  editUser(user: UserInterface) {
    console.log('editUser Called !!!');
    this.router.navigate(['/edit']);
    // this.editMode = true;
    // this.editId = user.id;
    // this.newUser = { ...user };
  }

  updateUser() {
    this.users.update((list) => list.map((u) => (u.id === this.editId ? { ...this.newUser } : u)));
    this.editMode = false;
    this.editId = null;
    this.newUser = { id: 0, name: '', email: '' };
  }
}
