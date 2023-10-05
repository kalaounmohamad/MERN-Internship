import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMenus } from "../actions/menuAction";
import { getRestaurants } from "../actions/restaurantAction";

const Menu = (storeId) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { menus, loading, error } = useSelector((state) => state.menus);

  useEffect(() => {
    dispatch(getMenus(id));
    dispatch(getRestaurants());
  }, [dispatch, id, storeId]);

  return (
    <div>
      {loading ? (
        <p>Loading menus...</p>
      ) : error ? (
        <p>{error}</p>
      ) : menus && menus.lenth > 0 ? (
        menus.map((menu) => (
          <div key={menu._id}>
            <h2>{menu.category}</h2>
            <hr />
            {menu.item && menu.items.length > 0 ? (
              <div className="row">
                {menu.items.map((fooditem) => (
                  <Fooditem key={fooditem._id} fooditem={fooditem} />
                ))}
              </div>
            ) : (
              <p>No food items available</p>
            )}
          </div>
        ))
      ) : (
        <p>No menus available</p>
      )}
    </div>
  );
};

export default Menu;
