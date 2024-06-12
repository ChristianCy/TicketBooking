import "./searchbuss.css"

const SearchBus = () =>{
    return (
        <div className="SearchBus">
            <img 
            src="https://media.gettyimages.com/id/625701722/photo/coach-bus.jpg?s=612x612&w=0&k=20&c=KNp2hL_hnIOCR-4Nhw2IArrUweosiYKdJUK2LJaOOsk=" 
            alt="" 
            className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Yaounde-Douala destination</h1>
                <span className="siDistance">300km from douala</span>
                <span className="siPackageOp">Free package compatiments</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">

                <div className="isRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>

                <div className="siDetailTexts">
                    <span className="siPrice">5000.0cfa</span>
                    <span className="siTaxOp">Includes package fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchBus