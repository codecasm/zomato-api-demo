/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IRestaurantSingle } from '../dashboard/interfaces/restaurants.interface';

@Component({
  selector: 'app-restaurant-desc',
  templateUrl: './restaurant-desc.component.html',
  styleUrls: ['./restaurant-desc.component.scss']
})
export class RestaurantDescComponent implements OnInit {

  @Input() description: IRestaurantSingle;


  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void {
    console.log('description', this.description);
  }

  // navigating to full detail page for specific restaurants
  public showMoreDetails(id: string): void {
    this.router.navigate([`restaurant/${id}`]);
  }

}
