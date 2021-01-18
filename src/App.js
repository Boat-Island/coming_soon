import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { toast } from 'react-toastify';
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
  { icon: twitter, to: "https://twitter.com/The_BoatIsland", alt: "Twitter" },
  { icon: instagram, to: "https://instagram.com/The_BoatIsland", alt: "Instagram" },
  { icon: facebook, to: "https://facebook.com/#", alt: "Facebook" },
  { icon: dribbble, to: "https://dribbble.com/#", alt: "Dribbble" }
]

function App() {
  const [processing, setProcessing] = useState(false);
  const [email, setEmail] = useState("");

  const subscribe = async () => {
    setProcessing(true)

    try {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://boatisland-api.herokuapp.com/api/subscribe";
      const res = await axios.post(url, { email });

      if (res.data) {
        toast(res.data.message, { type: "success" });
      }
    } catch (error) {
      console.log(error.response)
      toast(error.response.data.message, { type: "success" });
    }
    setProcessing(false);
  }

  return (
    <div className="container">
      <div className="content">
        <div>
          <div className="calender-mobile">
            <img src={Calendar} alt="calendar" />
          </div>
          <p style={{ textTransform: "uppercase" }}>Coming Soon</p>
          <p>A creative marketplace where indivduals can make money<br />from selling their art to the world!</p>
          <h1>Get notified<br />when we launch 🚀</h1>
          <div>
            <input
              className="email"
              style={{ height: 50, paddingLeft: 10 }}
              placeholder="Email address"
              onChange={e => setEmail(e.target.value)}
            />
            <button
              onClick={subscribe}
              disabled={processing}
              className="btn-subscribe"
              style={{ height: 55, marginLeft: 10, cursor: "pointer" }}>
              {!processing && <span>Okay, I’m in!</span>}
              {processing && <div className="">Processing...</div>}
        </button>
          </div>
          <div style={{ marginTop: 20, marginLeft: 10, width: "50%", display: "flex", justifyContent: "space-between" }}>
            {social.map(({ icon, alt, to }) => (
              <a key={alt} href={to} target="_blank" >
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
        <p>
          <b style={{ fontSize: 16, color: "#fff" }}>Some creators on our waitlist</b>
          <svg style={{ marginLeft: 10 }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7666 2.23333C9.20782 1.66951 8.52952 1.23841 7.7818 0.971859C7.03408 0.70531 6.23604 0.610125 5.4466 0.693332C2.99993 0.939999 0.986599 2.92667 0.713266 5.37333C0.3466 8.60667 2.8466 11.3333 5.99993 11.3333C7.00667 11.3333 7.99274 11.0477 8.84359 10.5096C9.69444 9.97143 10.3751 9.20293 10.8066 8.29333C11.0199 7.84667 10.6999 7.33333 10.2066 7.33333C9.95993 7.33333 9.7266 7.46667 9.61993 7.68667C9.23287 8.51935 8.57084 9.19332 7.74521 9.59521C6.91958 9.99709 5.98073 10.1024 5.0866 9.89333C3.6066 9.56667 2.41327 8.36 2.09993 6.88C1.96822 6.29484 1.96975 5.68756 2.1044 5.10306C2.23905 4.51857 2.50338 3.97183 2.87783 3.50328C3.25229 3.03473 3.7273 2.65635 4.26771 2.39614C4.80813 2.13593 5.40013 2.00055 5.99993 2C7.1066 2 8.09327 2.46 8.81326 3.18667L7.8066 4.19333C7.3866 4.61333 7.67993 5.33333 8.27327 5.33333H10.6666C11.0333 5.33333 11.3333 5.03333 11.3333 4.66667V2.27333C11.3333 1.68 10.6133 1.38 10.1933 1.8L9.7666 2.23333Z" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="-8.34722" y1="4.89227" x2="5.47578" y2="18.2277" gradientUnits="userSpaceOnUse">
                <stop stopColor="#B33BF6" />
                <stop offset="0.648958" stopColor="#F15223" />
                <stop offset="1" stopColor="#FF844C" />
              </linearGradient>
            </defs>
          </svg>
        </p>
        <br />
        <div style={{ display: 'flex', justifyContent: "space-around" }}>
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
        <p>
          <b style={{ fontSize: 16, color: "#fff" }}>Some creators on our waitlist</b>
          <svg style={{ marginLeft: 10 }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7666 2.23333C9.20782 1.66951 8.52952 1.23841 7.7818 0.971859C7.03408 0.70531 6.23604 0.610125 5.4466 0.693332C2.99993 0.939999 0.986599 2.92667 0.713266 5.37333C0.3466 8.60667 2.8466 11.3333 5.99993 11.3333C7.00667 11.3333 7.99274 11.0477 8.84359 10.5096C9.69444 9.97143 10.3751 9.20293 10.8066 8.29333C11.0199 7.84667 10.6999 7.33333 10.2066 7.33333C9.95993 7.33333 9.7266 7.46667 9.61993 7.68667C9.23287 8.51935 8.57084 9.19332 7.74521 9.59521C6.91958 9.99709 5.98073 10.1024 5.0866 9.89333C3.6066 9.56667 2.41327 8.36 2.09993 6.88C1.96822 6.29484 1.96975 5.68756 2.1044 5.10306C2.23905 4.51857 2.50338 3.97183 2.87783 3.50328C3.25229 3.03473 3.7273 2.65635 4.26771 2.39614C4.80813 2.13593 5.40013 2.00055 5.99993 2C7.1066 2 8.09327 2.46 8.81326 3.18667L7.8066 4.19333C7.3866 4.61333 7.67993 5.33333 8.27327 5.33333H10.6666C11.0333 5.33333 11.3333 5.03333 11.3333 4.66667V2.27333C11.3333 1.68 10.6133 1.38 10.1933 1.8L9.7666 2.23333Z" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="-8.34722" y1="4.89227" x2="5.47578" y2="18.2277" gradientUnits="userSpaceOnUse">
                <stop stopColor="#B33BF6" />
                <stop offset="0.648958" stopColor="#F15223" />
                <stop offset="1" stopColor="#FF844C" />
              </linearGradient>
            </defs>
          </svg>
        </p>
        <br />
        <div className="wishlist-content">
          {[person_one, person_two, person_three, person_four].map((e, i) => <div key={i}>
            <img
              className="avatar"
              src={e} alt="person"
            // style={{ margin: e === person_two ? 50 : e === person_four ? 30 : e === person_six ? 40 : 0 }}
            />
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
