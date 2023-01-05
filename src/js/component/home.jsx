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
              <p>Good: I really liked this project because it gave me a better understanding arrays and objects and I really liked being able to add my own creative element also on the story side</p>
              <p>Bad: I used NodeJS and Express for the regestriation and login and it was ANNOYING on the amount of times I got COR errors for different reasons, either because the endpoint was misspelled or because my ports weren't public. Really Annoying</p>
            </div>
          </div>
          <div class="card">
            <img src={ecom} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Ecom</h5>
              <h6 class="card-text">Project Rating: 7.7/10</h6>
              <p class="card-text">Good: I still used Nodejs and Express and i didn't have as many problems because I used it in my project, so for this project I decided to do ecommerce and used an api called stripe to process payments.</p>
              <p class="card-text">Bad: When I was intergrating said stripe api into my project, I had a hard time intergratign the uuid because it was deprecated so I had upgrade the library and write it into my code a different way</p>

            </div>
          </div>
          <div class="card">
            <img src={fog} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Don't Forget</h5>
              <p class="card-text">Project Rating: 10/10</p>
              <p class="card-text">GOOD: I absolutely love this project and i felt it took me to another level in my coding. For the registraion and login, I used Python/Flask to sign and login users, and I also use JWT to renavigate users to the protected pages when logging in. My favorite feature that I added was the Add a birthdate. When you add a birthdate, you get an alert to your email (using sendgrid) telling you to send a giftcard. </p>
              <p>Honorable Mentions: I learned a lot frome these errors with this project, the hardest thing about this project was using the python datetime library to work the way I wanted it to with the ADD A BIRTHDATE feature</p>

            </div>
          </div>
        </div>
      </div>
    </div></>
	);
};

export default Home;
