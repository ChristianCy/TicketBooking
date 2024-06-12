import React, { useState } from 'react';
import './list2.css';
import Navbar from '../../components/Navigationbar/navbar';
import Header from '../../components/Headerr/header';
import PvSearchItem from '../../components/pvsearchitem/Pvsearchitem';
import Maillist from "../../components/mailList/maillist";

function List2() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [dropOffTime, setDropOffTime] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log('Searching for:', { pickupLocation, pickupDate, pickupTime, dropOffDate, dropOffTime, minPrice, maxPrice });
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Pickup Location</label>
              <input 
                type="text" 
                value={pickupLocation} 
                onChange={(e) => setPickupLocation(e.target.value)} 
              />
            </div>
            <div className="lsItem">
              <label>Pickup Date</label>
              <input 
                type="date" 
                value={pickupDate} 
                onChange={(e) => setPickupDate(e.target.value)} 
                min={today} 
              />
            </div>
            <div className="lsItem">
              <label>Pickup Time</label>
              <input 
                type="time" 
                value={pickupTime} 
                onChange={(e) => setPickupTime(e.target.value)} 
              />
            </div>
            <div className="lsItem">
              <label>Drop Off Date</label>
              <input 
                type="date" 
                value={dropOffDate} 
                onChange={(e) => setDropOffDate(e.target.value)} 
                min={pickupDate || today} // Ensure drop off date is not before pickup date
              />
            </div>
            <div className="lsItem">
              <label>Drop Off Time</label>
              <input 
                type="time" 
                value={dropOffTime} 
                onChange={(e) => setDropOffTime(e.target.value)} 
              />
            </div>
            <div className="lsItem">
              <label>Min Price</label>
              <input 
                type="number" 
                value={minPrice} 
                onChange={(e) => setMinPrice(e.target.value)} 
                placeholder="Min Price"
              />
            </div>
            <div className="lsItem">
              <label>Max Price</label>
              <input 
                type="number" 
                value={maxPrice} 
                onChange={(e) => setMaxPrice(e.target.value)} 
                placeholder="Max Price"
              />
            </div>
            <button className="lsButton" onClick={handleSearch}>Search</button>
          </div>
          <div className="listResult">
            <PvSearchItem />
            <PvSearchItem />
            <PvSearchItem />
            <PvSearchItem />
            <PvSearchItem />
            <PvSearchItem />
            <PvSearchItem />
            <PvSearchItem />
          </div>
        </div>
      </div>
      <Maillist/>
    </div>
  );
}

export default List2;
