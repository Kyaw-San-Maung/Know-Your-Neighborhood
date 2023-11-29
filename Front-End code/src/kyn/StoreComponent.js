import React from "react";
import { Component } from "react";
import StoreService from "./StoreService";
import Footer from "../app/Footer";
import img from '../img/shop.jpg'
import './Store.css'

class StoreComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stores: [] };
  }

  componentDidMount() {
    StoreService.getAllStores().then((res) =>
      this.setState({ stores: res.data })
    );
  }

  render() {
    return (
      <>
        <div className="row store-container">
          <div class="card-group">
            {this.state.stores.map((store) => (
              <>
                <div class="card" style={{width:'18rem'}}>
                  <img class="card-img-top" src={img} alt="Card image cap" />
                  <div class="card-body">
                  <i class="fa-solid fa-store"/>{store.name} <br/><br/>
                  
                  <i class="fa-solid fa-phone"/>{store.phoneNumber}{" "}<br/><br/>
                    
                  <i class="fa-regular fa-envelope"/> {store.email} <br/><br/>
                    <i class="fa-solid fa-location-dot"/>{store.address}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default StoreComponent;
