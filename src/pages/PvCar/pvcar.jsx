
import './pvCar.css';
import Navbar from '../../components/Navigationbar/navbar';
import Header from '../../components/Headerr/header';
import Maillist from '../../components/mailList/maillist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function PvCar() {
  const photos = [
    { src: 'https://example.com/photo1.jpg' },
    { src: 'https://example.com/photo2.jpg' },
    { src: 'https://example.com/photo3.jpg' },
    { src: 'https://example.com/photo4.jpg' },
    { src: 'https://example.com/photo5.jpg' },
    { src: 'https://example.com/photo6.jpg' },
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
              <div className="pvCarImgWrapper" >
                <img src={photo.src} alt="" className="pvCarImg" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Maillist />
    </div>
  );
}

export default PvCar;
