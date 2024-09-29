import { Directive } from '@angular/core';
import {Calendar} from "primeng/calendar";

@Directive({
  selector: 'p-calendar',
  standalone: true
})
export class CalendarDirective {

  constructor(private calendar: Calendar) {
    this.calendar.dateFormat = 'dd/mm/yy';
    this.calendar.showIcon = true;
    this.calendar.showButtonBar = true;
    this.calendar.monthNavigator = true;
    this.calendar.yearNavigator = true;
    this.calendar.yearRange = '1900:2050';
    this.calendar.firstDayOfWeek = 1;
  }

}
