import { Component, Input, input, computed, Output, EventEmitter } from '@angular/core';

type User = { //interface
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // @Input({required: true}) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // }

  @Input({required: true}) user!: User;

  // avatar = input.required<string>();
  // name = input.required<string>();

  @Output() select = new EventEmitter();

  // get imagePath() {
  //    return 'assets/users/' + this.avatar;
  // }
  
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
 }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })
  // onSelectUser() {
  //   this.select.emit(this.id);
  // }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
