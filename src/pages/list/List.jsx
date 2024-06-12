
import "./lists.css";
import Navbar from '../../components/Navigationbar/navbar';
import Header from '../../components/Headerr/header';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchBus from "../../components/SearchBus/Searchbus";
import Maillist from "../../components/mailList/maillist";
  
const List = () => {

  const location= useLocation();
  const openDate = Date();

  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [opendate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listsContainer">
        <div className="listsWrapper">
          <div className="listsSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span
                onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={item=>setDate([item.selection])} 
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <button>Search</button>
          </div>
          <div className="listsResult">
            <SearchBus/>
            <SearchBus/>
            <SearchBus/>
            <SearchBus/>
            <SearchBus/>
            <SearchBus/>
            <SearchBus/>
            <SearchBus/>
            <SearchBus/>
          </div>
        </div>      
      </div>
      <Maillist />    
    </div>
  );
};

export default List;