import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Restaurant = () => {
  const { slug } = useParams<{ slug: string }>();
  const [restaurant, setRestaurant] = useState<any>();

  useEffect(() => {
    const getRestaurants = async () => {
      const res = await fetch(
        `https://tellurium.behuns.com/api/restaurants/${slug}/`,
        {
          mode: "cors",
        }
      );
      const body = await res.json();
      setRestaurant(body);
    };
    getRestaurants();
  }, [slug]);

  return (
    <div>
      <Link to="/">Inicio</Link>
      {restaurant && (
        <>
          <img src={restaurant.logo} alt="" width="250" />
          <h1>{restaurant.name}</h1>
          <span>{restaurant.description}</span>
          <span>{restaurant.rating} stars</span>
          <span>{restaurant.reviews.length} reviews</span>
          <section>
            <h2>Menú</h2>
            <ul>
              {restaurant.food_type.map((foodType: string) => {
                return <li key={foodType}>{foodType}</li>;
              })}
            </ul>
          </section>
          <section>
            <h2>Reviews</h2>
            <ul>
              {restaurant.reviews.map((review: any) => {
                return (
                  <li key={review.slug}>
                    <span>{review.email}</span> on{" "}
                    <time dateTime={review.created}>
                      {new Date(review.created).toDateString()}
                    </time>
                    {review.rating} stars<p>{review.comments}</p>
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      )}
    </div>
  );
};

export default Restaurant;
