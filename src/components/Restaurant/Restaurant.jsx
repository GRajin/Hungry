import React, { useState, useEffect } from "react";
import "./Restaurant.css";
import HeaderBar from "../HeaderBar/HeaderBar"
import RestaurantCard from "../RestaurantCard/RestaurantCard"

const Restaurant = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchRestaurantList = async () => {
            let response = await fetch("https://myjson.dit.upm.es/api/bins/4k1m");
            const data = await response.json();
            if (data.length > 0) {
                setData(data);
            }
        };
        fetchRestaurantList();
    }, []);

    return (
        <div className="restaurant-list-container">
            <HeaderBar />
            <div className="restaurant-list-wrapper child">
                {
                    data.map((res) => {
                        return (
                            <div key={res.id + res.name}>
                                <RestaurantCard key={res.id} restaurant={res} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Restaurant;
