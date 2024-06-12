
import './pvCar.css';
import Navbar from '../../components/Navigationbar/navbar';
import Header from '../../components/Headerr/header';
import Maillist from '../../components/mailList/maillist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function PvCar() {
  const photos = [
    { src: 'https://platform.cstatic-images.com/xlarge/in/v2/261d6b78-f6bc-58a8-bbed-04fbc869539d/9d7ce0ff-fe25-486e-b285-1e827ad50fd9/FGopzIMwqAPcEw6suRmv_I8xNx0.jpg' },
    { src: 'https://platform.cstatic-images.com/xlarge/in/v2/261d6b78-f6bc-58a8-bbed-04fbc869539d/9d7ce0ff-fe25-486e-b285-1e827ad50fd9/IT0pmULThwnoVrwMzUC0aFnKzZs.jpg' },
    { src: 'https://platform.cstatic-images.com/xlarge/in/v2/261d6b78-f6bc-58a8-bbed-04fbc869539d/9d7ce0ff-fe25-486e-b285-1e827ad50fd9/kibJeRXTdwyiO6aCt_JzqpDY3gw.jpg' },
    { src: 'https://platform.cstatic-images.com/xlarge/in/v2/261d6b78-f6bc-58a8-bbed-04fbc869539d/9d7ce0ff-fe25-486e-b285-1e827ad50fd9/kibJeRXTdwyiO6aCt_JzqpDY3gw.jpg' },
    { src: 'https://platform.cstatic-images.com/xlarge/in/v2/261d6b78-f6bc-58a8-bbed-04fbc869539d/9d7ce0ff-fe25-486e-b285-1e827ad50fd9/tqWcHrmspwqD_wIfL9gwSu9GXfE.jpg' },
    { src: 'https://platform.cstatic-images.com/xlarge/in/v2/261d6b78-f6bc-58a8-bbed-04fbc869539d/9d7ce0ff-fe25-486e-b285-1e827ad50fd9/nha_Bt8u2CpWcrRjXiiRbUAnEy8.jpg' },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="pvCarContainer">
        <div className="pvCarWrapper">
          <h1 className="pvCarTitle">Rav 4</h1>
          <div className="pvCarAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Dispansaire-Messasi Yaounde</span>
          </div>
          <span className="pvCarDesc">Precision and Power</span>
          <span className="pvCarDiscount">
            Get a 5% discount from 7 days and above!
          </span>
          <div className="pvCarImages">
            {photos.map(photo => (
              <div className="pvCarImgWrapper">
                <img src={photo.src} alt="" className="pvCarImg" />
              </div>
            ))}
          </div>
          <div className="pvCarDetails">
              
          </div>
          <div className="pvCarDetailPrice">
            <h1>Perfect for off track journeys</h1>
            <span>
              Exellent score of 10

            </span>
            <h2>
              <b>50000 FCFA </b> per day
            </h2>
            <button>Rent Now!</button>

          </div>
        </div>
      </div>
      <Maillist />
    </div>
  );
}

export default PvCar;
