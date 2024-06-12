
import Header from "../../components/Headerr/header";
import Navbar from "../../components/Navigationbar/navbar";
import Buslist from "../../components/bus-list/Buslist";
import Feature from "../../components/features/feature";
import Maillist from "../../components/mailList/maillist";
import "./home.css"

function Home() {
  return (
    <div>
       <Navbar/>
       <Header/>
       <div className="homeContainer">
         <Feature/>
         <h1 className="homeTitle">Browse the Available Trips</h1>
         <Buslist/>
         <Maillist/>




       </div>

    </div>
  );
}

export default Home;