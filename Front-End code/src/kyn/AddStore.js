import React, { useState } from "react";
import "./Store.css";
import Footer from "../app/Footer";
import addNewStore from "./AddStoreService";

export default function AddStore() {
  const [shopName, setShopName] = useState("");
  const [shopPhone, setShopPhone] = useState("");
  const [shopEmail, setShopEmail] = useState("");
  const [shopAddress, setShopAddress] = useState("");

  const NameChg = (e) => {
    setShopName(e.target.value);
  };

  const PhoneChg = (e) => {
    setShopPhone(e.target.value);
  };

  const EmailChg = (e) => {
    setShopEmail(e.target.value);
  };

  const AddressChg = (e) => {
    setShopAddress(e.target.value);
  };

  const AddClick = (e) => {
    e.preventDefault();

    const shopInfo = {
      name: shopName,
      phoneNumber: shopPhone,
      email: shopEmail,
      address: shopAddress,
    };

    addNewStore(shopInfo);

    console.log("Adding New Store.");
  };

  return (
    <>
      <div className="form-container">
        <form>
          <div class="form-group">
            <label>Shop Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Shop name"
              onChange={NameChg}
            />
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              class="form-control"
              placeholder="Shop ph no"
              onChange={PhoneChg}
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="text"
              class="form-control"
              placeholder="Shop email"
              onChange={EmailChg}
            />
          </div>
          <div class="form-group">
            <label>Shop Address</label>
            <input
              type="text"
              class="form-control"
              placeholder="Shop address"
              onChange={AddressChg}
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={AddClick}>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
