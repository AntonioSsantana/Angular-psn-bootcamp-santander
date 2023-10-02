import { Component, OnInit } from '@angular/core';

// Mock
import gamesMock from '../../mock/games.json';

// Interface
import IGame from 'src/app/Interfaces/IGame';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gamesArray: Array<IGame> = [];

  constructor() { }

  ngOnInit(): void {
    this.gamesArray = gamesMock.games;
  }
}
