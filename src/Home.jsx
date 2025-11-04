import Card from "./Card"
import sofa from "./images/sofa.jpg"
import s25ultra from "./images/s25ultra.jpg"
import soundbar from "./images/soundbar.jpg"

function Home(props){

    return (
        <div className="home-items">
          <Card
            id = {1}
            image = {sofa}
            description = "Godrej Interio Wooden Sofa Three Seater"
            price = "24,999"
            alt = "sofa"
            name = "button1"
            onAddToCart = {props.onAddToCart}
          />
           <Card
            id = {2}
            image = {s25ultra}
            description = "Samsung Galaxy S25 Ultra 256b Gb"
            price = "1,45,999"
            alt = "s25ultra"
            name = "button2"
            onAddToCart = {props.onAddToCart}
          />
           <Card
            id = {3}
            image = {soundbar}
            description = "Sony Dolby Atmos Sound Bar "
            price = "15,999"
            alt = "soundbar"
            name = "button3"
            onAddToCart = {props.onAddToCart}
          />
         
        </div>
        
    )
}

export default Home;