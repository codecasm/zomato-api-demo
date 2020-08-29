/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChildren, QueryList, ComponentRef, ComponentFactory } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RestaurantsService } from '../../services/restaurants.service';
import { RestaurantDescComponent } from '../restaurant-desc/restaurant-desc.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IRestaurant, IRestaurantSingle, IRestaurants } from './interfaces/restaurants.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('false', style({ height: '60px' })),
      state('true', style({ height: '426px' })),
      transition('true <=> false', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class DashboardComponent implements OnInit {

  public filter: string[] = ['delivering', 'booking'];
  public selectedValue: string;

  public loading: boolean;
  public previous: number;
  public restaurants: IRestaurant[];
  public componentRef: ComponentRef<RestaurantDescComponent>;

  @ViewChildren('resDescContainer', { read: ViewContainerRef }) container: QueryList<ViewContainerRef>;

  constructor(
    private authService: AuthService,
    private restaurantService: RestaurantsService,
    private resolver: ComponentFactoryResolver
  ) { }

  public ngOnInit(): void {
    this.getAllRestaurants();
  }

  // getting all the restaurants
  public getAllRestaurants(): void {
    this.loading = true;
    this.restaurantService.getRestaurants().subscribe((data: IRestaurants) => {
      this.restaurants = data.restaurants;
      this.setProperties();
      this.loading = false;
    });
  }

  // setting properties for expansion
  public setProperties(): void {
    this.restaurants = this.restaurants.map((restaurant: IRestaurant) => {
      restaurant.restaurant.expand = false;
      restaurant.restaurant.rows = 1;
      return restaurant;
    });
  }

  // for creating dynamic component
  public createComponent(restaurantDescription: IRestaurantSingle, index: number): void {
    if (this.previous === index) {
      this.toggleComponent(index);
      return;
    }
    if (this.previous >= 0) {
      this.removeComponent(this.previous);
    }
    this.previous = index;
    this.restaurants[index].restaurant.expand = true;
    this.restaurants[index].restaurant.rows += 6;

    // create component code
    const factory: ComponentFactory<RestaurantDescComponent> = this.resolver.resolveComponentFactory(RestaurantDescComponent);
    this.componentRef = this.container.toArray()[index].createComponent(factory);
    this.componentRef.instance.description = restaurantDescription;
    this.componentRef.changeDetectorRef.detectChanges();
  }

  public removeComponent(index: number): void {
    this.restaurants[this.previous].restaurant.expand = false;
    this.restaurants[this.previous].restaurant.rows -= 6;
    this.container.toArray()[index].remove();
  }

  // toggle dynamic component
  public toggleComponent(index: number): void {
    this.restaurants[index].restaurant.expand = !this.restaurants[index].restaurant.expand;
    if (this.restaurants[index].restaurant.expand) {
      this.previous = -1;
      this.createComponent(this.restaurants[index].restaurant, index);
    } else {
      this.removeComponent(index);
    }
  }

  public changeFilter(filter: string): void {
    this.restaurants = filter === 'booking' ?
      this.restaurants.filter((restaurant: IRestaurant) => restaurant.restaurant.has_table_booking === 1) :
      this.restaurants.filter((restaurant: IRestaurant) => restaurant.restaurant.has_online_delivery === 1);
  }

  // method to logout from
  public logout(): void {
    this.authService.logout();
  }

}
