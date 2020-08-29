/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IPhoto, IReview, IRestaurants, IRestaurant, IRestaurantSingle } from '../components/dashboard/interfaces/restaurants.interface';

@Injectable({
  providedIn: 'root'
})

export class RestaurantsService {

  private entity = {
    id: 5,
    type: 'city'
  };

  private headers: HttpHeaders;
  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'user-key': environment.ZOMATO_API_KEY
    });

    this.headers.append('Access-Control-Allow-Methods', 'GET, POST');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  // setting headers for url
  private getUrl(url: string): Observable<any> {
    const baseurl = `${environment.BASE_URL}${url}`;
    return this.http.get(baseurl, { headers: this.headers });
  }

  public getRestaurants(): Observable<IRestaurants> {
    return this.getUrl(`search?entity_id=${this.entity.id}&entity_type=${this.entity.type}`);
  }

  public getRestaurant(restaurantId: number): Observable<IRestaurantSingle> {
    return this.getUrl(`restaurant?res_id=${restaurantId}`);
  }

  public getReviews(restaurantId: number): Observable<IReview> {
    return this.getUrl(`reviews?${restaurantId}&start=1&count=10`);
  }
}
