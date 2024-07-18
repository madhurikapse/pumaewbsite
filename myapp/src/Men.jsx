import React, { useState } from 'react';
import './Mens.css'; // For some basic styling
import TextChanger from "./TextChanger"
import Navbar from "./Navbar"
import Rednavbar from "./Rednavbar"
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
const MensShoes = () => {
  const router=useNavigate()
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [shoes, setShoes] = useState([
    { id: 1, name: 'Porsche Legacy Caven 2.0 Unisex Motorsport SneakersPrices include GST',price:"5,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/308158/02/sv01/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers' },
    { id: 2, name: 'Smashic Unisex Sneakers',price:"3,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/308158/02/sv01/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers'},
    { id: 3, name: 'Porsche Legacy Caven 2.0 Unisex Motorsport SneakersPrices include GST',price:"4,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/394371/02/sv01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers' },
    { id: 4, name: 'Porsche Legacy Caven 2.0 Unisex Motorsport SneakersPrices include GST',price:"7,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/399848/01/sv01/fnd/IND/fmt/png/PUMA-Evoke-Layup-Men' },
    { id: 5, name: 'Smashic Unisex Sneakers',price:"2,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/379988/02/sv01/fnd/IND/fmt/png/Scorch-Runner-V2-Men' },
    { id: 6, name: 'Porsche Legacy Caven 2.0 Unisex Motorsport SneakersPrices include GST',price:"1,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/394005/01/sv01/fnd/IND/fmt/png/Puma-Dexfly-V1-Men' },
    { id: 7, name: 'Porsche Legacy Caven 2.0 Unisex Motorsport SneakersPrices include GST',price:"5,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/308158/02/sv01/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers' },
    { id: 8, name: 'Smashic Unisex Sneakers',price:"3,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/308158/02/sv01/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers'},
    { id: 9, name: 'Porsche Legacy Caven 2.0 Unisex Motorsport SneakersPrices include GST',price:"4,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/394371/02/sv01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers' },
    { id: 10, name: 'Porsche Legacy Caven 2.0 Unisex Motorsport SneakersPrices include GST',price:"7,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/399848/01/sv01/fnd/IND/fmt/png/PUMA-Evoke-Layup-Men' },
    { id: 11, name: 'Smashic Unisex Sneakers',price:"2,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/379988/02/sv01/fnd/IND/fmt/png/Scorch-Runner-V2-Men' },
    { id: 12, name: 'Porsche Legacy Caven 2.0 Unisex Motorsport SneakersPrices include GST',price:"1,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/394005/01/sv01/fnd/IND/fmt/png/Puma-Dexfly-V1-Men' },
    { id: 13, name: 'Porsche Legacy Caven 2.0 Unisex Motorsport SneakersPrices include GST',price:"5,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/308158/02/sv01/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers' },
    { id: 14, name: 'Smashic Unisex Sneakers',price:"3,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/308158/02/sv01/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers'},
    { id: 15, name: 'Porsche Legacy Caven 2.0 Unisex Motorsport SneakersPrices include GST',price:"4,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/394371/02/sv01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers' },
    { id: 16, name: 'Porsche Legacy Caven 2.0 Unisex Motorsport SneakersPrices include GST',price:"7,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/399848/01/sv01/fnd/IND/fmt/png/PUMA-Evoke-Layup-Men' },
    { id: 17, name: 'Smashic Unisex Sneakers',price:"2,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/379988/02/sv01/fnd/IND/fmt/png/Scorch-Runner-V2-Men' },
    { id: 18, name: 'Porsche Legacy Caven 2.0 Unisex Motorsport SneakersPrices include GST',price:"1,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/394005/01/sv01/fnd/IND/fmt/png/Puma-Dexfly-V1-Men' },
    { id: 17, name: 'Smashic Unisex Sneakers',price:"2,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/107353/04/sv01/fnd/IND/fmt/png/Cricket-Square-Men' },
    { id: 17, name: 'Smashic Unisex Sneakers',price:"2,000", img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/107353/02/sv01/fnd/IND/fmt/png/Cricket-Square-Men'},
  ]);

  return (
    <div className="mens-shoes">
    <TextChanger/>
    <Navbar />
    <Rednavbar/>
<div className='div1'>
<Link to="/Home" className="DIV2">.Home </Link>
<Link to="/" className="DIV3">.Men</Link>
 <label htmlFor="options" ></label>
      <select id="options" value={selectedValue} onChange={handleChange}>
        <option value="">SHORT BY</option>
        <option value="option1">Best match</option>
        <option value="option2">top sellr</option>
        <option value="option3">low price</option>
      </select>
      {selectedValue && <p>You selected: {selectedValue}</p>}
<h2>MEN</h2>
</div>
    <h1>5666 products</h1>
      <div className="shoes-container">
        {shoes.map((shoe) => (
          
          <div key={shoe.id} className="shoe">
            <img onClick={()=>{router("/Shoesone")}} src={shoe.img} alt={shoe.name} />
            <p>{shoe.name}</p>
            <p className='price'>{shoe.price}</p>
            <div className='readbox'>-50%</div>
            <div className='readbox1'>-40%</div>
            <div className='readbox2'>-30%</div>
          </div>
        ))}
      </div>
      
      
      <div className="content-container">
      <h1 className="main-heading"></h1>
      <p className="paragraph">Welcom eto pumaPuma SE is a German multinational corporation who design and manufacture athletic and casual footwear, apparel, and accessories, headquartered in Herzogenaurach, Bavaria, Germany. Puma is the third largest sportswear manufacturer in the world.[6] The company was founded in 1948 by Rudolf Dassler (1898–1974). In 1924, Rudolf and his brother Adolf "Adi" Dassler had jointly formed the company Gebrüder Dassler Schuhfabrik ('Dassler Brothers Shoe Factory'). The relationship between the two brothers deteriorated until they agreed to split in 1948, forming two separate entities, Adidas and Puma.</p>

      <h2 className="subheading"></h2>
      <p className="paragraph">This is a paragraph under subheading 1. It provides more detailed information about a specific aspect of the main topic.</p>

      <h2 className="subheading"></h2>
      <p className="paragraph">he brothers drove from Bavaria to the 1936 Summer Olympics in Berlin with a suitcase full of spikes and persuaded United States sprinter Jesse Owens to use them, the first sponsorship for an African</p>
      <h3 className="sub-subheading"></h3>
      <p className="paragraph">he brothers drove from Bavaria to the 1936 Summer Olympics in Berlin with a suitcase full of spikes and persuaded United States sprinter Jesse Owens to use them, the first sponsorship for an African</p>
      <h2 className="subheading"></h2>
      <p className="paragraph">This is a paragraph under subheading 3. It introduces another aspect of the main topic, providing further insights and information.</p>
    </div>
    <Footer/>
    </div>
  );
};

export default MensShoes;
