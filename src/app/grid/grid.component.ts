import {Component, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";

const FIELD_SIZE = 6;

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
  coords: number[][][] = [];

  verticalBorders: number[] = [];
  horizontalBorders: number[] = [];


  ngOnInit(): void {
    for (let i = 0; i < this.fieldSize + 1; i++) {
      this.horizontalBorders.push(i);
      this.verticalBorders.push(i);
      this.coords[i] = [];
      for (let j = 0; j < this.fieldSize + 1; j++) {
        this.coords[i][j] = [i, j];
      }
    }
  }

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


}
