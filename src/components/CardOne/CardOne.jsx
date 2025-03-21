import './CardOne.css';

const destinations = [
  { name: "Paris", price: 699, image: "src/assets/pairs.png" },
  { name: "Greece", price: 1079, image: "src/assets/greece.png" },
  { name: "Norway", price: 895, image: "src/assets/norway.png" },
  { name: "Tuscany", price: 1245, image: "src/assets/tuscany.png" }
];

const CardOne = () => {
  return (
    <div className="popular-destinations">
      <h2>Most Popular Destinations</h2>
      <div className="destinations-list">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <div className="destination-info">
              <h3>{destination.name}</h3>
              <p>From <span className="price">${destination.price}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOne ;
