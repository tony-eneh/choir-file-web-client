import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongListComponent implements OnInit {
  title = 'choir file app';

  constructor() { }

  ngOnInit() {
  }

}
