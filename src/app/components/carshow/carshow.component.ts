import { Component, OnInit } from '@angular/core';
import { CarshowService } from 'src/app/services/carshow.service';
import { Carshow } from 'src/app/models/carshow';
import { map } from 'rxjs/operators';
import { _ } from 'underscore';

@Component({
  selector: 'app-carshow',
  templateUrl: './carshow.component.html',
  styleUrls: ['./carshow.component.scss']
})



export class CarshowComponent implements OnInit {
  carShows: Carshow[];
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
      // _.sortBy(carShows, (show) => show.car.)

      // Could use a central RxJs based data store as a single source of truth
      this.carShows = carShows;
    },
      (error) => {
        // Could forward to a global event handler
        console.log('Error');
      });
  }


}
