import "./CardTwo.css";

const holidays = [
  { name: "Bali", price: 899, duration: "4D3N", image: "src/assets/image.png" },
  { name: "Swiss", price: 900, duration: "6D5N", image: "src/assets/SwitzerlandImage.png" },
  { name: "Boracay", price: 699, duration: "5D4N", image: "src/assets/BoracayImage.png" },
  { name: "Palawan", price: 789, duration: "4D3N", image: "src/assets/PalawanImage.png" }
];

const CardTwo = () => {
  return (
    <div className="recommended-holidays">
      <h2>Recommended Holidays</h2>
      <div className="holidays-list">
        {holidays.map((holiday, index) => (
          <div key={index} className="holiday-card">
            <img src={holiday.image} alt={holiday.name} />
            <div className="holiday-info">
              <h3>{holiday.name}</h3>
              <p>{holiday.duration}</p>
              <p className="price">${holiday.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTwo;
