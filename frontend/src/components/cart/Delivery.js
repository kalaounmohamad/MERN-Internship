import React, { useState } from "react";
import { countries } from "countries-list";

import { useNavigate } from "react-router-dom";

//importing two hooks for connecting with redux
import { useDispatch, useSelector } from "react-redux";

import { saveDeliveryInfo } from "../../actions/cartActions";

const Delivery = () => {
  //create an array of countries
  const countriesList = Object.values(countries);
  const navigate = useNavigate();
  const { deliveryInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(deliveryInfo.address);
  const [city, setCity] = useState(deliveryInfo.city);
  const [postalCode, setPostalCode] = useState(deliveryInfo.postalCode);
  const [phoneNo, setPhoneNo] = useState(deliveryInfo.phoneNo);
  const [country, setCountry] = useState(deliveryInfo.country);

  const dispatch = useDispatch();

  //define the fct for handling
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveDeliveryInfo({ address, city, postalCode, phoneNo, country }));
    navigate("/confirm");
  };

  return (
    <>
      <div className="row wrapper">
        <div className="col-10 col-lg-5 cartt">
          <form onSubmit={submitHandler}>
            <h1 className="mb-4">Delivery Address</h1>
          </form>
        </div>
      </div>
    </>
  );
};

export default Delivery;
