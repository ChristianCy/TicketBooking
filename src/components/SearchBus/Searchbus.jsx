import "./searchbuss.css"

const SearchBus = () =>{
    return (
        <div className="SearchBus">
            <img 
            src="https://media.gettyimages.com/id/625701722/photo/coach-bus.jpg?s=612x612&w=0&k=20&c=KNp2hL_hnIOCR-4Nhw2IArrUweosiYKdJUK2LJaOOsk=" 
            alt="" 
            className="siImg"
            />
            <div className="siDescB">
                <h1 className="siTitleB">Yaounde-Douala destination</h1>
                <span className="siDistanceB">300km from douala</span>
                <span className="siPackageOpB">Free package compatiments</span>
                <span className="siCancelOpB">Free cancellation</span>
                <span className="siCancelOpSubtitleB">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetailsB">

                <div className="isRatingB">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTextsB">
                    <span className="siPriceB">5000.0cfa</span>
                    <span className="siTaxOpB">Includes package fees</span>
                    <button className="siCheckButtonB">See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchBus