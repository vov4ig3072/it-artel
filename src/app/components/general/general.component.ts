import { Component } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {
  arrayDate = [
    { date: '2017-01-10' },
    { date: '2016-05-18' },
    { date: '2002-12-20' },
    { date: '2020-06-30' },
  ];

  decreasingDate = this.arrayDate
    .map(({ date }) => date)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  increasingDate = this.arrayDate
    .map(({ date }) => date)
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  clickHandle(event: any) {
    event.stopPropagation();
    console.log(event.target.id);
    alert(`Block clicked ${event.target.id}`);
  }
}
