
import Header from "../../components/Headerr/header";
import Navbar from "../../components/Navigationbar/navbar";
import Feature from "../../components/features/feature";
import "./home.css"

function Home() {
  return (
    <div>
       <Navbar/>
       <Header/>
       <div className="homeContainer">
         <Feature/>
         <h1 className="homeTitle">Browse the Available Trips</h1>




       </div>

    </div>
  );
}

export default Home;