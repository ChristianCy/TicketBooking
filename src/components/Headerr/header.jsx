import './headerr.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faCar } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="Header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBus} />
            <span>Book Bus Trips</span>
          </div>
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental Service</span>
          </div>
        </div> 
        <h1 className="headerTitle">Book Your Bus Tickets and Car Rentals at the Best Prices</h1>
        <p className="headerDesc">Choose the best option that suits your needs and budget!</p>
        <button className="headerBt"> Sign in / Register</button>
      </div>
    </div>
  );
}

export default Header;
