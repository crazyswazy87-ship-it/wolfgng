import CardNav from "../components/CardNav"
import logo from "../../public/assets/wolff.png"
import { Link, useNavigate } from "react-router-dom";

import abt from "../../public/assets/wolff.png"
import danski from "../../public/assets/cart.png"

import london from "../../public/assets/trao.png";
import nairobi from "../../public/assets/sweaty.png";
import kampala from "../../public/assets/sweti.png";
import cairo from "../../public/assets/t-sho.png";
import Kinsasha from "../../public/assets/ty-ty.png"
import abudhabi from "../../public/assets/navy-t-sho.png"
import lagos from "../../public/assets/swaet.png";
import claifornia from "../../public/assets/t-sho-ty.png"
import paloalto from "../../public/assets/seat-tsho.png"
import dodoma from "../../public/assets/combat.png";
import dah from "../../public/assets/combato.png";

const Home = () => {

  const navigate = useNavigate();

   const itemsz = [
  {
    label: "About",
    target: "about",
  },
  {
    label: "Catalogue",
    target: "catalogue",
  },
  {
    label: "Contact",
    target: "socials",
  }
];

 const merchs = [
    {
      image: london,
      text: ["WolfGNG", "Sweat Pants"],
       overlay: "WolfGNG"
    },
    {
      image: nairobi,
      text: ["WolfGNG", "Navyblue Suit"],
      overlay: "WolfGNG"
    },
    {
      image: kampala,
      text: ["WolfGNG", "white Suit"],
     
      overlay: "WolfGNG"
    },
    {
      image: cairo,
      text: ["WolfGNG", "Black T-shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: Kinsasha,
      text: ["WolfGNG", "White T-shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: abudhabi,
      text: ["WolfGNG", "Navy Blue T-shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: dodoma,
      text: ["WolfGNG", "Combat T-shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: dah,
      text: ["WolfGNG", "Navy T-Shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: claifornia,
      text: ["WolfGNG", "Black Tees"],
      overlay: "WolfGNG"
    },
    {
      image: lagos,
      text: ["WolfGNG", "Navy Blue Tees"],
      overlay: "WolfGNG"
    },
    {
      image: paloalto,
      text: ["WolfGNG", "White Tees"],
      overlay: "WolfGNG"
    },
  ];

  return (
    <div className="missed">
      {/*card nav */}
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={itemsz}
        baseColor=""
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        theme="light"
        className="topbar"
      />

      {merchs.map((merch, i) => (
      <div className={`sauti item-${i}`} key={i}>
        
        <img 
          src={merch.image}
          alt="WOLFGNG"
          onClick={() => navigate("/catalogue")}
          className="kanye"
        />

        <div className="berbique">
          <Link 
              to={'/wolfgng'} 
              className="pain">
              <img 
                src={abt}
                alt="wolfgng"
                height={30}
                width={30}
                className="waba"
              />
          </Link>

          <button 
            className="shugli">
            <Link 
              to={'https://www.instagram.com/wolf_gng5?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} 
              className="pain">
              Checkout 
            </Link>
            <img 
              src={danski}
              alt="cart"
              height={25}
              width={25}
            />
          </button>
        </div>

      </div>
      ))}

    </div>
  )
}

export default Home