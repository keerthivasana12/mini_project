import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/3.jpg";


function Contact () {
    return(
    <>
    <Navbar />
    <Hero cName="hero-mid" heroImg={ContactImg} title="Contact Us" btnClass="hide"/>
    </>
    );
    }
    export default Contact;