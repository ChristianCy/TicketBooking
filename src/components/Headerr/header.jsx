import React from 'react';
import './headerr.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faCar, faSuitcaseRolling, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const handleBusClick = () => {
    // Handle Bus Trips click
    console.log('Bus Trips clicked');
  };

  const handleCarClick = () => {
    // Handle Car Rental click
    console.log('Car Rental clicked');
  };

  return (
    <div className="Header">
      <div className="headerContainer">
        <div className="headerList">
          <button className="headerListItem active" onClick={handleBusClick}>
            <FontAwesomeIcon icon={faBus} />
            <span>Book Bus Trips</span>
          </button>
          <button className="headerListItem active" onClick={handleCarClick}>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental Service</span>
          </button>
        </div> 
        <h1 className="headerTitle">Book Your Bus Tickets and Car Rentals at the Best Prices</h1>
        <p className="headerDesc">Choose the best option that suits your needs and budget!</p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faSuitcaseRolling} className="headerIcon" />
            <input type="text" placeholder="Where are you going?" className="headerSearchInput" />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span className="headerSearchText">Date to Date</span>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn2">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
