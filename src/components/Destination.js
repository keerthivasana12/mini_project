import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/4.jpg"
import Mountain4 from "../assets/5.jpg"
import DestinationData from "./DestinationData";

const Destination = () =>{
    return (
<div className = "destination">
    <h1> Popular Destinations</h1>
    <p> Tours Give you the opportunity to see lot of Adventures </p>
    <DestinationData
    className="first-des"
    heading="Taal Volcano,Batangas"
    text="Taal Volcano (IPA Tagalog: Bulkang Taal) is a large caldera filled by Taal Lake in the Philippines.[1] Located in the province of Batangas about 50 kilometers (31 mi) south of Manila, the volcano is the second most active volcano in the country with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake.[3] The caldera was formed by prehistoric eruptions between 140,000 and 5,380 BP"
    img1={Mountain1}
    img2={Mountain2}
    />
    <DestinationData
    className="first-des-reverse"
    heading="Rock Climbing in Cebu" 
    text="Climb up and reach the summit of this active volcanic mountain. The climb is challenging but rewarding with"
    img3={Mountain3}
    img4= {Mountain4}
    />
</div>
     
    );

};
export default Destination;