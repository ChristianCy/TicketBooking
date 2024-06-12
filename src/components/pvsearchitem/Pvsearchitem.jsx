import React from 'react';
import "./pVsearchitem.css"

function PvSearchItem() {
  return (
    <div className="PvSearchItem">
      <img
        src="https://media.gettyimages.com/id/1310789848/photo/coach-bus-in-rome.jpg?s=612x612&w=0&k=20&c=y_NX3ooXNNUZTd2U7SGaJKV-iSha2oUGvZ5KI4E4Eqg="
        alt="Bus"
        className="siImg"
      />
      <div className="siDesc">
        <h2 className="siTitle">Flashy Cars for Rent!</h2>
        <span className="siBrand">Rav 4</span>
        <span className="siLocation">Pickup Location: Yaounde</span>
        
        <span className="siState">Available</span>
        
      </div>
      <div className="sidetails">
         <div className="siRating">
           <span>Exellent</span>
           <button>10</button>
         </div>
      
      
       <div className="siDeTxt">
         <span className="siPrice">100000FCFA</span>
         <button className = "siSeeBtn">See the Car</button>

       </div>
       </div> 
    </div>
  );
}

export default PvSearchItem;
