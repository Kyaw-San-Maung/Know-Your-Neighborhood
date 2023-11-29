import React from 'react'
import img from '../img/aboutImg.jpg'
import "./Aboutus.css"
import Footer from '../app/Footer'

export default function Aboutus() {
  return (
    <>
    <div className='about-container'>
      <p>About Us</p>
      </div>
      <div className='aboutusFeature'>
        <p>
          At CommunityConnect, our mission is to foster strong, connected communities through digital empowerment. Rooted in values like transparency,
          inclusivity, and innovation, we strive to bridge gaps and create a sense of belonging for everyone.<br/><br/>
          Founded in 2023, Kyaw San Maung originated from his uncle idea. What sets us apart is our unique approach to community building through interactive digital platforms.<br /><br/>
          Explore our website to discover inspiring stories, valuable resources, and upcoming events that contribute to building stronger communities. For inquiries or collaboration opportunities,
          contact us at KYN@communityconnect.org. Connect with us on social media for real-time updates and community discussions.
        </p>
        <img src={img} alt='3D ppl'></img>
      </div>
      <Footer />
    </>
  )
}
