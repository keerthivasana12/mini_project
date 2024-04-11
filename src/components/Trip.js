import "./TripStyles.css"
 import TripData from "./TripData"
 import Trip1 from "../assets/5.jpg"
 import Trip2 from "../assets/8.jpg"
 import Trip3 from "../assets/6.jpg"
function Trip(){
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You Can Discover unique destinations Using Google Maps  API and Weather API...🤌🗺️🌏</p>
            <div className="tripcard">
                <TripData 
                       image={Trip1}
                       heading = "Trip in Indonesia"
                       text = "Planning a trip to Indonesia can be an exciting adventure! Indonesia is a vast and diverse country consisting of over 17,000 islands, offering a wide range of experiences from stunning beaches to lush rainforests, vibrant cities to tranquil temples."
                />

                    <TripData 
                       image={Trip2}
                       heading = "Trip in Malayasia"
                       text = "Malaysia offers a diverse range of destinations, from bustling cities like Kuala Lumpur to beautiful islands like Langkawi and Penang. Decide what kind of experience you're looking for – cultural exploration, beach relaxation, or urban adventures – and plan your itinerary accordingly."
                />

                    <TripData 
                       image={Trip3}
                       heading = "Trip in India"
                       text = "India is known for its rich cultural heritage, which is reflected in its art, architecture, music, dance, festivals, and cuisine. It is a melting pot of religions, languages, and ethnicities. Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism are among the major religions practiced in India. Each region of India has its own distinct culture, traditions, and languages."
                />
            </div>
        </div>
    );
}
export default Trip;