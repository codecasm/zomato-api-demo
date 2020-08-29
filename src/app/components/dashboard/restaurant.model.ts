/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

import { IRestaurants, IRestaurant, IRestaurantSingle, IUser, IReview, IPhoto, IUserRating, IRestaurantsLocation } from './interfaces/restaurants.interface';

// All the restaurants
export class Restaurants implements IRestaurants {
    resultsFound?: number;
    resultsShown?: number;
    resultsStart?: number;
    restaurants?: Restaurant[];
}

export class Restaurant implements IRestaurant {
    restaurant?: RestaurantSingle;
}

export class RestaurantSingle implements IRestaurantSingle {
    id?: number;
    name?: string;
    url?: string;
    location?: IRestaurantsLocation;
    averageCostForTwo?: number;
    priceRange?: number;
    currency?: string;
    thumb?: string;
    featuredImage?: string;
    photosUrl?: string;
    menuUrl?: string;
    eventsUrl?: string;
    userRating?: IUserRating;
    hasOnlineDelivery?: number;
    isDeliveringNow?: boolean;
    isBookFormWebView?: number;
    hasTableBooking?: number;
    deeplink?: string;
    cuisines?: string;
    allReviewsCount?: number;
    photoCount?: number;
    phoneNumbers?: string;
    photos?: IPhoto[];
    allReviews?: IReview[];
    timings?: string;
    expand?: boolean;
    rows?: number;
}


export class RestaurantLocation implements IRestaurantsLocation {
    address?: string;
    locality?: string;
    city?: string;
    latitude?: number;
    longitude?: number;
    zipcode?: string;
    countryId?: number;
}

export class UserRating implements IUserRating {
    aggregateRating?: number;
    ratingText?: string;
    ratingColor?: string;
    votes?: number;
}

export class Photo implements IPhoto {
    id?: string;
    url?: string;
    thumbUrl?: string;
    user?: IUser;
    resId?: number;
    caption?: string;
    timestamp?: number;
    friendlyTime?: string;
    width?: number;
    height?: number;
    commentsCount?: number;
    likesCount?: number;
}

export class User implements IUser {
    name?: string;
    zomatoHandle?: string;
    foodieLevel?: string;
    foodieLevelNum?: number;
    foodieColor?: string;
    profileUrl?: string;
    profileDeeplink?: string;
    profileImage?: string;
}

export class Review implements IReview {
    rating?: number;
    reviewText?: string;
    id?: number;
    ratingCcolor?: string;
    reviewTimeFriendly?: string;
    ratingText?: string;
    timestamp?: number;
    likes?: number;
    user?: IUser;
    commentsCFount?: number;
}
