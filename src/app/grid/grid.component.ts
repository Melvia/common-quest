import {Component, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";

const FIELD_SIZE = 6;
type Direction = 'up' | 'right' | 'down' | 'left';
type Coord = { x: number, y: number };

//const directionsComplete = (coords: Coord): boolean => { return  }

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {
  items: boolean[] = [];
  lionCoords = [[1, 1], [2, 1], [3, 1], [0, 4]];
  crownCoords = [[2, 2], [3, 2], [2, 3], [3, 3]];
  fieldSize = FIELD_SIZE;
  //все координаты
  coords: Coord[][] = [];

  verticalBorders: number[] = [];
  horizontalBorders: number[] = [];


  ngOnInit(): void {
    for (let i = 0; i < this.fieldSize + 1; i++) {
      this.horizontalBorders.push(i);
      this.verticalBorders.push(i);
      for (let j = 0; j < this.fieldSize + 1; j++) {
        this.coords[i][j] = {x: i, y: j};
      }
    }
  }

  //проверка на границы - они некликабельны

  //обводка границ



  transformCoordsInOrderNumber(x: number, y: number) {
    return x + y * (FIELD_SIZE);
  }

  hasLionClass(x: number, y: number) {
    return (!!this.lionCoords?.some(coord => coord[0] === x && coord[1] === y));
  }

  hasCrownClass(x: number, y: number) {
    return (!!this.crownCoords?.some(coord => coord[0] === x && coord[1] === y));
  }

  toggleClass(e: any) {
    console.log(e.target.dataset);
    e.target.classList.toggle('active');

  }

  //преобразование координат в направления

  //фигура замыкается TODO добавить расчет
  figureIsComplete(): boolean {
    return true;
  }


  rotate90(directions: Direction[]): Direction[] {
    const newDirections = directions.map(direction => {
      switch (direction) {
        case 'up': {
          return 'right';
        }
        case 'right': {
          return 'down';
        }
        case 'down': {
          return 'left';
        }
        default: {
          return 'up';
        }
      }
    });
    return newDirections;
  }

  rotate270(directions: Direction[]): Direction[] {
    const newDirections = directions.map(direction => {
      switch (direction) {
        case 'up': {
          return 'left';
        }
        case 'right': {
          return 'up';
        }
        case 'down': {
          return 'right';
        }
        default: {
          return 'down';
        }
      }
    });
    return newDirections;
  }

  rotate180(directions: Direction[]): Direction[] {
    const newDirections = directions.map(direction => {
      switch (direction) {
        case 'up': {
          return 'down';
        }
        case 'right': {
          return 'left';

        }
        case 'down': {
          return 'up';

        }
        default: {
          return 'right';
        }
      }
    });
    return newDirections;
  }

  flipVertical(directions: Direction[]): Direction[] {
    const newDirections = directions.map(direction => {
      switch (direction) {
        case 'up': {
          return 'down';
        }
        case 'right': {
          return 'right';

        }
        case 'down': {
          return 'up';

        }
        default: {
          return 'left';
        }
      }
    });
    return newDirections;
  }

  flipHorizontal(directions: Direction[]): Direction[] {
    const newDirections = directions.map(direction => {
      switch (direction) {
        case 'up': {
          return 'up';
        }
        case 'right': {
          return 'left';
        }
        case 'down': {
          return 'down';

        }
        default: {
          return 'right';
        }
      }
    });
    return newDirections;
  }

  coordsToDirections(coords: Coord[]): Direction[] {
    return [];
  }


//функция принадлежности объекта фигуре

//расчет количества точек


}
