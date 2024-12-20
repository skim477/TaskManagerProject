import { Component, Input, input, computed, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  //avatar = input<string>('');
  // avatar = input.required<string>();
  // name = input.required<string>();

  @Output() select = new EventEmitter();


  get imagePath() {
     return 'assets/users/' + this.avatar;
  }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })
  onSelectUser() {
    this.select.emit(this.id);
  }
}
