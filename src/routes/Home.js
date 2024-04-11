import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/13.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home () {
    return(
      <>
      <Navbar/>
      <Hero   cName="hero"
      heroImg={HomeImg}
      title="Your Journey Your Story"
      text="Choose Your Favorite Destination  and Start Exploring Today...!✨"
      buttonText = "Get Start a Travel Plan"
      url = "/"
      btnClass="show"
      />
      <Destination/>
      <Trip />
      <Footer />
    </>
    );
    }
    export default Home;