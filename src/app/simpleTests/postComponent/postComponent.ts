import { Component } from '@angular/core';
export interface Post {
  title: string;
  description: string;
  totalLikes: number;
}
@Component({
  selector: 'app-post',
  templateUrl: './postComponent.html',
  styleUrls: ['./postComponent.less'],
})
export class PostComponent {
  totalLikes: number = 0;
  like() {
    this.totalLikes++;
  }
  dislike() {
    if (this.totalLikes) {
      this.totalLikes--;
    }
  }
}
