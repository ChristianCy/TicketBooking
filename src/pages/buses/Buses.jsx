
import "./busee.css";
import Navbar from "../../components/Navigationbar/navbar";
import Header from "../../components/Headerr/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Buses() {
  const photos = [
    {
      src: "https://media.gettyimages.com/id/1458349579/photo/mid-adult-man-and-woman-boarding-bus-side-view.jpg?s=1024x1024&w=gi&k=20&c=3DOe3aMr1ZnuQXDeBk7bvJPM3P-uJvWo5m8IdybltNw="
    },
    {
      src: "https://media.gettyimages.com/id/1416033334/photo/female-travelers-in-early-20s-talking-across-the-aisle.jpg?s=1024x1024&w=gi&k=20&c=J3CghrUQHiRE4OhfFCn_-s7e6XDiaTxJit0Xa1ikm0o="
    },
    {
      src: "https://media.gettyimages.com/id/1356235610/photo/singapore-malaysia-vaccinated-travel-lane-woodlands-temporary-bus-interchange.jpg?s=1024x1024&w=gi&k=20&c=JoPlH6qbvAT-lXOAMJ0i-5s5Rw33O2h3wXnNcRAYjLU="
    },
    {
      src: "https://media.gettyimages.com/id/136522011/photo/white-bus.jpg?s=1024x1024&w=gi&k=20&c=AAykNCfKBcypP2bxB3G30lQSVMQqRj5BenxStKDtKnA="
    },
    {
      src: "https://media.gettyimages.com/id/2148031473/photo/a-green-bus-in-c%C3%B3rdoba-spain.jpg?s=1024x1024&w=gi&k=20&c=HsHcVs0CjOnsE7QkXaTxkohKWiP9qs40fTV9VI-yD_4="
    },
    {
      src: "https://media.gettyimages.com/id/94462406/photo/blue-sky-over-modern-bus.jpg?s=1024x1024&w=gi&k=20&c=n9NmyFxPGuQmke6oED0eL1IFJt7Lr1tJBqtuFbzWCMI="
    },
  ];
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="busContainer">
        <div className="busWrapper">
          <button className="bookNow">
            Reserve or Book Now!</button>
          <h1 className="busTitle">Big Bus</h1>
          <div className="busAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Located in Douala and Yaounde</span>
          </div>
          <span className="busDistance">
            Excellent location at500m from center
          </span>
          <span className="busPriceHighlight">
            Book a ticket over 6000.0cfa at this agency and get a free fast food meal
          </span>
          <div className="busImages">
            {photos.map(photo=>(
              <div className="busImgWrapper">
                <img src={photo.src} alt="" className="busImg"/>
                </div>
            ))}
          </div>
          <div className="busDetails">
            <div className="busDetailsTexts">
            <h1 className="busTitle">Stay in the heart</h1>
              <p className="busDesc">
                You probably still remember a time when you had to physically attend a line 
                to provide information about you to buy a ticket for travelling. Not too long ago, 
                you and other customers probably were bored using the normal system and tickets on the hand. 
                Due to advances in technology and the pandemic, many people were forced to travel with alot of precautions, 
                causing many of these "old system" methods to be replaced by more up-to-date tools.Ticket booking 
                Tools are programs or apps that can help an individual or group of people obtain a ticket before stepping into respective travelling agency

              </p>
            </div>
            <div className="busDetailsPrice">
              <h1>Perfect for a  long trip journey!</h1>
              <span>
                Located in the heart of Douala, 
                this agency has an excellent customer service score of 9.8!
              </span>
              <h2>
                <b>6000.0cfa</b> (per site)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buses;