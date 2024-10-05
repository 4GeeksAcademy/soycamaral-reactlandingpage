import React from "react";
import Navbar from './Navbar.js'
import Hero from './Hero.js'
import Cards from './Cards.js'
import Footer from './Footer.js'

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
		<div className="Container p-0">
			<Hero />
			
			<div className="container justify-content-between">
			<div className="row justify-content-between">
				<div className=" p-0 text-center col-3">
				<Cards image="https://fastly.picsum.photos/id/535/500/325.jpg?hmac=N_x8pcQ4dsv64vYNEl8gRNpO5hfVk0r8nTDa2Z4QLBI" boton="Press here!"title= "Card 1" description="Esta es mi primer tarjeta. La realicé para asegurarme de que todo andaba bien."/>
				</div>
				<div className=" p-0 text-center col-3">
				<Cards image="https://fastly.picsum.photos/id/219/500/325.jpg?hmac=xoJgbaNIatO03Dr9xiL7DAPvr36e_MP0bkw-E9apNvI" boton="Or here!" title= "Card 2" description="Esta es mi segunda tarjeta, y solo estoy escribiendo en ella porque el Proyecto lo demanda. 
				." />
				</div>
				<div className="p-0 text-center col-3">
				<Cards image="https://fastly.picsum.photos/id/477/500/325.jpg?hmac=hnTtSrtsb50iC6_zpiyz9vdmSqprA1MdAFAPGP6Q4MM" boton="Maybe here?" title= "Card 3" description="Esta es mi tercera tarjeta, y ya no sé que más escribir. No sé como utilizar el lorem aquí, no me anda" />
				</div>
				<div className=" p-0 text-center col-3">
				<Cards image="https://fastly.picsum.photos/id/936/500/325.jpg?hmac=wcwX-_KkiMJROFADOUew_phOV6DXG2LEjj6Sa1Fv-ZE" boton="How about here? "title= "Card 4" description="Esta es mi cuarta tarjeta, por suerte ya no tengo que pensar que más escribir"/>
				</div>
		    </div>
			</div>
		</div>
			<Footer />
			
			
		</div>
	);
};

export default Home;
