import React, { useEffect } from "react";
import { getRestaurants } from "../actions/restaurantAction";
import Restaurant from "./Restaurant";
import Loader from "./Layout/Loader";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const {
    loading: restaurantsLoading,
    error: restaurantsError,
    restaurants,
  } = useSelector((state) => state.restaurants);

  useEffect(() => {
    if (restaurantsError) {
      return alert.error(restaurantsError);
    }
    dispatch(getRestaurants());
  }, [dispatch, restaurantsError]);

  return (
    <>
      {restaurantsLoading ? (
        <Loader />
      ) : restaurantsError ? (
        <Message variant="danger">{restaurantsError}</Message>
      ) : (
        <>
          <section>
            <div className="row mt-4">
              {restaurants && restaurants.restaurants ? (
                restaurants.restaurants.map((restaurant) => (
                  <Restaurant key={restaurant._id} restaurant={restaurant} />
                ))
              ) : (
                <Message variant="info"> No restaurants found</Message>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
