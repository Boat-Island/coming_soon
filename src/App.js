import './App.css';
import Calendar from "./assests/images/Calendar.png"
import twitter from "./assests/images/twitter.png"
import instagram from "./assests/images/instagram.png"
import facebook from "./assests/images/facebook.png"
import dribbble from "./assests/images/dribbble.png"
import person_one from "./assests/images/avatars/person1.jpeg"
import person_two from "./assests/images/avatars/person2.jpeg"
import person_three from "./assests/images/avatars/person3.jpeg"
import person_four from "./assests/images/avatars/person4.jpeg"
import person_five from "./assests/images/avatars/person5.jpeg"
import person_six from "./assests/images/avatars/person6.jpeg"
import person_seven from "./assests/images/avatars/person7.jpeg"
import person_eight from "./assests/images/avatars/person8.jpeg"
import person_nine from "./assests/images/avatars/person9.jpeg"
import person_ten from "./assests/images/avatars/person10.jpeg"
import person_01 from "./assests/images/avatars/person11.jpeg"
import person_02 from "./assests/images/avatars/person12.jpeg"
import person_03 from "./assests/images/avatars/person13.jpeg"
import person_04 from "./assests/images/avatars/person14.jpeg"

const social = [
  { icon: twitter, to: "twitter.com/#", alt: "Twitter" },
  { icon: instagram, to: "instagram.com/#", alt: "Instagram" },
  { icon: facebook, to: "facebook.com/#", alt: "Facebook" },
  { icon: dribbble, to: "dribbble.com/#", alt: "Dribbble" }
]

function App() {
  return (
    <div className="container">
      <div className="content">
        <div>
          <div className="calender-mobile">
            <img src={Calendar} alt="calendar" />
          </div>
          <p style={{ textTransform: "uppercase" }}>Coming Soon</p>
          <p>A creative marketplace where indivduals can make money<br />
from selling their art to the world!</p>
          <h1>Get notified<br />
when we launch 🚀</h1>
          <div>
            <input className="email" style={{ height: 50, paddingLeft: 10 }} placeholder="Email address" />
            <button className="btn-subscribe" style={{ height: 55, marginLeft: 10, cursor: "pointer" }}>
              Okay, I’m in!
        </button>
          </div>
          <div style={{ marginTop: 20, marginLeft: 10, width: "50%", display: "flex", justifyContent: "space-between" }}>
            {social.map(({ icon, alt, to }) => (
              <a href={to} >
                <img src={icon} alt={alt} />
              </a>
            ))}
          </div>
        </div>

        <div className="calender-content">
          <img src={Calendar} alt="calendar" />
        </div>
      </div>

      <div className="wishlist">
        <div style={{ marginTop: 100, display: 'flex', justifyContent: "space-around" }}>
          {[person_one, person_two, person_three, person_four, person_five, person_six, person_seven,
            person_eight].map((e, i) => <div key={i}>
              <img
                className="avatar"
                src={e} alt="person"
                style={{ margin: e === person_two ? 50 : e === person_four ? 30 : e === person_six ? 40 : 0 }}
              />
            </div>)}
        </div>

        <div style={{ marginTop: 0, display: 'flex', justifyContent: "space-around" }}>
          {[person_nine, person_ten, person_01, person_02, person_03, person_04].map((e, i) => <div key={i}>
            <img
              className="avatar"
              src={e} alt="person"
              style={{ margin: e === person_ten ? 20 : e === person_02 ? 35 : e === person_04 ? 20 : 0 }}
            />
          </div>)}
        </div>
      </div>

      <div className="wishlist-mobile">
        {[person_one, person_two, person_three, person_four].map((e, i) => <div key={i}>
            <img
              className="avatar"
              src={e} alt="person"
            // style={{ margin: e === person_two ? 50 : e === person_four ? 30 : e === person_six ? 40 : 0 }}
            />
          </div>)}
      </div>
    </div>
  );
}

export default App;
