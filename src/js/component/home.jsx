import React from "react";
import "../../styles/index.css"
import img from "../../img/book.png"
import ecom from "../../img/ecom.png"
import fog from "../../img/for.png"
import Navbar from "../component/navbar.jsx"
//create your first component
const Home = () => {
	return (
    <><Navbar /><div className="container">
      <div className="Main">
        <div class="text">
          <h1>HI,</h1>
          <h4>I'm Fajr.</h4>
          <p>I design and program webpages</p>
        </div>
      </div>

      <div className="row">
        <div className="color col-6">
        </div>
        <div className="colorTwo col-6">
        </div>
      </div>
      <div class="cards">
        <div class="card-group">
          <div class="card">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">StoryBook</h5>
              <h6 class="card-text">Project Rating: 6.5/10</h6>
              <p>Good: I liked this project because it gave me a better understanding of how arrays and objects work. I liked being able to add my creative element to the story.</p>
              <p>Bad: I used NodeJS and Express for the registration and login. I encountered some difficulty with COR errors for different reasons, either because the endpoint didn’t exist, or my ports weren't public.</p>
            </div>
          </div>
          <div class="card">
            <img src={ecom} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Ecom</h5>
              <h6 class="card-text">Project Rating: 7.7/10</h6>
              <p class="card-text">Good: For this project, I used NodeJS and Express also. I decided to do an e-commerce site and used an API (Stripe) to process payments.</p>
              <p class="card-text">Bad: When I was integrating the Stripe API into my project, I had a hard time with the uuid library because it was deprecated, so I had to upgrade the library and write it into my code a different way.</p>

            </div>
          </div>
          <div class="card">
            <img src={fog} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Don't Forget</h5>
              <p class="card-text">Project Rating: 10/10</p>
              <p class="card-text">GOOD: I love this project and I felt it took me to another level in my coding. For the registration and login, I used Python/Flask to sign and login users, and I used JWT to redirect users to the protected pages when logging in. My favorite feature was the "Add a Birthdate". When you add a birthdate, you get an alert to your email (using Sendgrid) reminding you to send a gift card.</p>
              <p>Honorable Mentions: I learned a lot from these errors with this project. The hardest thing about this project was using the Python datetime library to work the way I wanted it to with the "Add a Birthdate" feature.</p>

            </div>
          </div>
        </div>
      </div>
    </div></>
	);
};

export default Home;
