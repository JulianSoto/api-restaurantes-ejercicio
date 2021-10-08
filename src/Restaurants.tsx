import React, { useEffect, useState } from "react";

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
                  <h1>{restaurant.name}</h1>
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
