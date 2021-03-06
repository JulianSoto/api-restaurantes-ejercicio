import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const res = await fetch("https://tellurium.behuns.com/api/restaurants/");
      const body = await res.json();
      setRestaurants(body);
    };
    getRestaurants();
  }, []);

  return (
    <div>
      <h1>Restaurantes</h1>
      <ul>
        {restaurants.map((restaurant) => {
          return (
            <li key={restaurant.slug}>
              <article>
                <img src={restaurant.logo} alt="" width="250" />
                <div>
                  <Link to={`restaurantes/${restaurant.slug}`}>
                    <h1>{restaurant.name}</h1>
                  </Link>
                  <span>{restaurant.rating} of 5</span>
                  <span>{restaurant.reviews.length} reviews</span>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Restaurants;
