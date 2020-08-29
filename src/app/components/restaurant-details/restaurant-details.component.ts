/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { IReview, IRestaurantSingle } from '../dashboard/interfaces/restaurants.interface';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})

export class RestaurantDetailsComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  private restaurantId: number;
  public resDetails: IRestaurantSingle;
  public reviews: any;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantsService,
  ) { }

  public ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.restaurantId = params.id;
    });

    this.restaurantService.getRestaurant(this.restaurantId).subscribe((restaurantDetail: IRestaurantSingle) => {
      this.resDetails = restaurantDetail;
    });

    this.restaurantService.getReviews(this.restaurantId).subscribe((review: IReview) => {
      console.log('review', review);
    });

  }

  // unsubscribing router subscription
  public ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
