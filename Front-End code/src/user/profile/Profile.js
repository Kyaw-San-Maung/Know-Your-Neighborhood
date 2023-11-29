import React, { Component } from "react";
import "./Profile.css";
import Footer from "../../app/Footer";
import StoreService from "../../kyn/StoreService";
import img from "../../img/shop.jpg"
import img1 from "../../img/profile1.jpg";
import img2 from "../../img/profile2.jpg"


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = { stores: [] };
    console.log(props);
  }

  componentDidMount() {
    StoreService.getAllStores().then((res) =>
      this.setState({ stores: res.data })
    );
  }
  render() {
    return (
      <>
        <div className="profile-container">
          <div className="container">
            <div className="subprofile-container">
              <div className="profile-info">
                <div className="profile-avatar">
                  {this.props.currentUser.imageUrl ? (
                    <img
                      src={img1}
                      alt={this.props.currentUser.userName}
                    />
                  ) : (
                    <div className="text-avatar">
                      <span>
                        {this.props.currentUser.userName &&
                          this.props.currentUser.userName[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="profile-name">
                  <h2>{this.props.currentUser.userName}</h2>
                  <p className="profile-email">
                    {this.props.currentUser.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="shop-container">
          
          <div className="shop-btn">
              <a href="/addStore">
              <button className="addBtn"><i class="fa-solid fa-circle-plus"></i> Add shop </button>
              </a>
            </div>
            
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
        </div>
        <Footer />
      </>
    );
  }
}

export default Profile;
