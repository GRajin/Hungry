import React from "react";
import "./RestaurantCard.css"

const RestaurantCard = (props) => {
    return (
        <div className="restaurant-card">
            <img
                className="restaurant-logo"
                src={props.restaurant.feature_image}
                alt="Restaurant"
            />
            <div className="restaurant-name wrap-text">{props.restaurant.name}</div>
                <div className="restaurant-desc wrap-text">{props.restaurant.cusines}</div>
                <div className="restaurant-location">
                    <div className="distance">{props.restaurant.distance}</div>
                </div>
                <div className="restaurant-review">
                    {`${props.restaurant.reviews} reviews`}
                </div>
            </div>
            )
}
export default RestaurantCard;