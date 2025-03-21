import React from "react";
import "./CardThree.css";

const stays = [
  {
    title: "Matterhorn Suites",
    price: "$575/night",
    rating: 4.9,
    reviews: 60,
    image: "src/assets/Matterhorn Suites Image.png",
    type: "Entire bungalow",
  },
  {
    title: "Discovery Shores",
    price: "$360/night",
    rating: 4.8,
    reviews: 116,
    image: "src/assets/Discovery Shores Image.png",
    type: "2-Story beachfront suite",
  },
  {
    title: "Arctic Hut",
    price: "$420/night",
    rating: 4.7,
    reviews: 78,
    image: "src/assets/Arctic Hut Image.png",
    type: "Single deluxe hut",
  },
  {
    title: "Lake Louise Inn",
    price: "$244/night",
    rating: 4.6,
    reviews: 63,
    image: "src/assets/Lake Louise Image.png",
    type: "Deluxe King Room",
  },
];

const CardThree = () => {
  return (
    <div className="popular-stays">
      <div className="header">
        <h2>Popular Stays</h2>
        <a href="#" className="view-all">View all stays →</a>
      </div>
      <div className="stays-list">
        {stays.map((stay, index) => (
          <div className="stay-card" key={index}>
            <img src={stay.image} alt={stay.title} className="stay-image" />
            <div className="stay-info">
              <p className="stay-type">{stay.type}</p>
              <h3 className="stay-title">{stay.title}</h3>
              <p className="stay-price">{stay.price}</p>
              <p className="stay-rating">
                ⭐ {stay.rating} <span className="review-count">({stay.reviews} reviews)</span>
              </p>
              <button className="details-button">MORE DETAILS</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardThree;
