import './App.css';
import Calendar from "./assests/images/Calendar.png"
import twitter from "./assests/images/twitter.png"
import instagram from "./assests/images/instagram.png"
import facebook from "./assests/images/facebook.png"
import dribbble from "./assests/images/dribbble.png"

const social = [
  {icon: twitter, to: "twitter.com/#", alt: "Twitter"},
  {icon: instagram, to: "instagram.com/#", alt: "Instagram"},
  {icon: facebook, to: "facebook.com/#", alt: "Facebook"},
  {icon: dribbble, to: "dribbble.com/#", alt: "Dribbble"}

]

function App() {
  return (
    <div className="container">
      <div>
        <p style={{textTransform: "uppercase"}}>Coming Soon</p>
        <p>A creative marketplace where indivduals can make money<br />
from selling their art to the world!</p>
        <h1>Get notified<br />
when we launch 🚀</h1>
        <div>
          <input style={{height: 50, paddingLeft: 10}} placeholder="Email address"/>
          <button style={{height: 55, marginLeft: 10}}>
            Okay, I’m in!
        </button>
        </div>
        <div style={{marginTop: 20, marginLeft: 10, width: "50%", display: "flex", justifyContent: "space-between"}}>
          {social.map(({icon,alt, to}) => (
            <a href={to} >
              <img src={icon} alt={alt}/>
            </a>
          ))}
        </div>
      </div>

      <div >
        <img src={Calendar} alt="calendar" />
      </div>

    </div>
  );
}

export default App;
