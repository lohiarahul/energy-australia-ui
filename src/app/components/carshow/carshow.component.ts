import { Component, OnInit } from '@angular/core';
import { CarshowService } from 'src/app/services/carshow.service';
import { Carshow } from 'src/app/models/carshow';
import { map } from 'rxjs/operators';
import { CarshowVM } from 'src/app/models/carshowVM';
import * as _ from 'underscore';

@Component({
  selector: 'app-carshow',
  templateUrl: './carshow.component.html',
  styleUrls: ['./carshow.component.scss']
})



export class CarshowComponent implements OnInit {
  carShows: Carshow[];
  flattenedData = CarshowVM[10];
  displayIndex = 0;

  compareFn: any;
  constructor(private carShowService: CarshowService) {
    this.compareFn = (a, b) => {
      if (a.unwrappedName < b.unwrappedName) { return -1; }
      if (a.unwrappedName > b.unwrappedName) { return 1; }
      return 0;
    };
  }

  ngOnInit() {
    this.carShowService.getCarShows().pipe(
    ).subscribe((carShows) => {
      this.carShows = carShows;

      // Single liner solution to creating display data
      // this.displayData = [].concat(...this.carShows.map(entry => entry.cars.map(cars => ({ ...{ name: entry.name }, ...cars }))));

      // Create display data
      this.flattenedData = this.carShows.reduce((acc, curr) => {
        acc.push(...curr.cars.map(c => Object.assign({ name: curr.name }, c)));
        return acc as CarshowVM[];
      }, []);

      // Sorting should automatically out the identical makes together for display
      this.flattenedData = _.sortBy(this.flattenedData, 'make');


    },
      (error) => {
        // Could forward to a global event handler
        console.log('Error');
      });
  }


}
