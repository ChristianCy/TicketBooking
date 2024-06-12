import React from 'react';
import './headerr.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faCar, faSuitcaseRolling, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/theme/default.css';
import'react-date-range/dist/styles.css';
import {format} from  "date-fns";
import { useNavigate } from 'react-router-dom';

function Header({type}) {
  const handleBusClick = () => {
    // Handle Bus Trips click
    console.log('Bus Trips clicked');
  };

  const handleCarClick = () => {
    // Handle Car Rental click
    console.log('Car Rental clicked');
  };
  const[destination, setDestination] = useState("")
  const[openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const navigate = useNavigate()

  const handleSearch = ()=>{
    navigate("/buses", { state: { destination, date}});

  };

  return (
    <div className="Header">
      <div className= {type === "list" ? "headerContainer listMode" : "headerContainer"}>
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
        { type !== "list" &&
          <><h1 className="headerTitle">Book Your Bus Tickets and Car Rentals at the Best Prices</h1>
        <p className="headerDesc">Choose the best option that suits your needs and budget!</p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faSuitcaseRolling} className="headerIcon" />
            <input 
            type="text" 
            placeholder="Where are you going?" 
            className="headerSearchInput" 
            onChange={e=>setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText"> {format(date[0].startDate, "MM/dd/yyyy")} to {format(date[0].endDate, "MM/dd/yyyy")}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item=> setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
             />}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn2" onClick={handleSearch}>Search</button>
          </div>
        </div></>}
      </div>
    </div>
  );
}

export default Header;
