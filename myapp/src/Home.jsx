import Navbar from "./Navbar";
import './Home.css'
import "./Page.css"
import Footer from "./Footer";
import TextChanger from "./TextChanger";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/page'); // navigate to login page
    };
    return(
        <div>
            <TextChanger/>
            <Navbar />
            <div id='flat40percent'>
                <img 
                src='https://cdn.sanity.io/images/qa41whrn/prod/09646d25a041fa5bb063844eaad9fdae3af30fde-2880x1040.jpg?w=2160&q=80&auto=format'
                alt="flatforty"/>
                <div id="endofseasonsale">
                    <div id="endofseason">
                        <p>END OF SEASON SALE</p>
                    </div>
                    <div id="newstyles">
                        <p>NEW STYLES ADDED</p>
                    </div>
                    <div id="extrafive">
                        <p>+ EXTRA 5% OFF ON ALL ONLINE PAYMENTS</p>
                    </div>
                    <div id="forhimherkids">
                        <div id="him">
                            <p>FOR HIM</p>
                        </div><div id="her">
                            <p>FOR HER</p>
                        </div><div id="kids">
                            <p>FOR KIDS</p>
                        </div>
                    </div>
                </div>

                <div id="coolstylesathotdis">
                    <div id="coolstyelstext">
                        <p>COOL STYLES AT HOT DISCOUNTS</p>
                        <p>FLAT 40% OFF | + EXTRA 5% OFF ON ALL ONLINE PAYMENTS</p>
                    </div>
                    <div id="coolstylesimages">
                        <img src="https://image.useinsider.com/pumaindia/defaultImageLibrary/sneakers-10%201%201%202-1720441879.jpeg" alt="sneakers" />
                        <img src="https://image.useinsider.com/pumaindia/defaultImageLibrary/T-SHIRTS-10%201%201%201%20%281%29-1720441896.jpeg" alt="tshirtspolos" />
                        <img src="https://image.useinsider.com/pumaindia/defaultImageLibrary/TRAINING-10%201%201%201-1720441906.jpeg" alt="training" />
                        <img src="https://image.useinsider.com/pumaindia/defaultImageLibrary/MOTORSPORT-10%201%201%201-1720441933.jpeg" alt="motosports" />
                        <img src="https://image.useinsider.com/pumaindia/defaultImageLibrary/SPORTS-10%201%201%201-1720441944.jpeg" alt="shorts" />
                        <img src="https://image.useinsider.com/pumaindia/defaultImageLibrary/kids-110-summer-favs%201%201%201-1720441958.jpeg" alt="kidssummerfav" />
                    </div>
                </div>

                <div id="seethegame">
                    <div id="seethegameimg"></div>
                    <div id="seethegame1img"></div>
                    <div id="seethegametext1">
                        <p>SEE THE GAME LIKE WE DO</p>
                    </div>
                    <div id="seethegametext2">
                        <p>PUMA x INDIAN OLYMPIC ASSOCIATION</p>
                    </div>
                    <div id="seethegametext3">
                        <p>Official Footwear Partner</p>
                    </div>
                    <div id="seethegamelearnmore">
                        <p>LEARN MORE</p>
                    </div>
                </div>

                <div id="viratkohli">
                    <div id="viratkohliimg"></div>
                    <div id="viratkohli1img"></div>
                        <div id="virattext1">
                            <p>PLAY LOUD</p>
                        </div>
                        <div id="virattext2">
                            <p>BREAK IT DOWN</p>
                        </div>
                        <div id="viratshopnow">
                            <p>SHOP NOW</p>
                        </div>
                </div>

                <div id="backtoazzuro">
                    <div id="backtoazzuroimg"></div>
                    <div id="backtoazzuro1img"></div>
                        <div id="backtoazzurotext1">
                            <p>BACK TO AZZURO</p>
                        </div>
                        <div id="backtoazzurotext2">
                            <p>SCUDERIA FERRARI MIAMI LIMITED EDITION</p>
                        </div>
                        <div id="backtoazzuroshopnow">
                            <p>SHOP NOW</p>
                        </div>
                </div>

                <div id="pumaxtrolls">
                    <div id="pumaxtrollsimg"></div>
                    <div id="pumaxtrolls1img"></div>
                        <div id="pumaxtrollstext1">
                            <p>PUMA x TROLLS</p>
                        </div>
                        <div id="pumaxtrollstext2">
                            <p>THAT FUZZY FEELING</p>
                        </div>
                        <div id="pumaxtrollsshopnow">
                            <p>SHOP NOW</p>
                        </div>
                </div>

                <div id="pumaxcarrots">
                    <div id="pumaxcarrotsimg"></div>
                    <div id="pumaxcarrots1img"></div>
                        <div id="pumaxcarrotstext1">
                            <p>PUMA X CARROTS</p>
                        </div>
                        <div id="pumaxcarrotstext2">
                            <p>BY ANWAR CARROTS</p>
                        </div>
                        <div id="pumaxcarrotstext3">
                            <p>ORGANIC XL CARROTS</p>
                        </div>
                        <div id="carrotsshopnow">
                            <p>SHOP NOW</p>
                        </div>
                </div>

                <div id="pumaxpalm">
                    <div id="pumaxpalmimg"></div>
                    <div id="pumaxpalm1img"></div>
                        <div id="pumaxpalmtext1">
                            <p>PUMA x PALM</p>
                        </div>
                        <div id="pumaxpalmtext2">
                            <p>TREE CREW</p>
                        </div>
                        <div id="pumaxpalmtext3">
                            <p>CLASSIC SPORT STYLE</p>
                        </div>
                        <div id="palmshopnow">
                            <p>SHOP NOW</p>
                        </div>
                </div>

                <div id="foreverfaster">
                    <div id="foreverfastervideo">
                        <video autoplay="autoplay" muted loop>
                            <source src="https://cdn.sanity.io/files/qa41whrn/prod/41abad3662b8524f819e624d4ae4c6c5f6f38239.mp4" type="video/mp4"/>
                        </video> 
                    </div>
                    <div id="foreverfastershopnow">
                        <p>SHOP NOW</p>
                    </div>
                </div>

                <div id="thefuture">
                    <div id="thefutureimg"></div>
                    <div id="thefuture1img"></div>
                        <div id="thefuturetext1">
                            <p>THE FUTURE IS NOW</p>
                        </div>
                        <div id="thefuturetext2">
                            <p>THE NEXT GEN OF PUMA</p>
                        </div>
                        <div id="thefuturetext3">
                            <p>RIYAN PARAG & NITISH KUMAR REDDY</p>
                        </div>
                        <div id="thefutureshopnow">
                            <p>SHOP NOW</p>
                        </div>
                </div>

                <div id="kidsmusthavestyles">
                    <div id="kidsmusthavestylestext"><p>KID'S MUST-HAVE STYLES</p></div>
                    <div id="kidsmusthavestylesimgs">
                        <div id="schholstore">
                            <div id="schoolstoretext">
                                <p>SCHOOL STORE</p>
                            </div>
                            <div id="onestopshop">
                                <p>One Stop Shop</p>
                            </div>
                        </div>

                        <div id="casualwear">
                            <div id="casualweartext">
                                <p>CASUAL WEAR</p>
                            </div>
                            <div id="wardrobestop">
                                <p>Wardrobe Stop</p>
                            </div>
                        </div>

                        <div id="softrideshoes">
                            <div id="softrideshoestext">
                                <p>SOFTRIDE SHOES</p>
                            </div>
                            <div id="everydaycomfort">
                                <p>Everyday Comfort</p>
                            </div>
                        </div>

                        <div id="sets">
                            <div id="setstext">
                                <p>SETS</p>
                            </div>
                            <div id="makeastatement">
                                <p>Make A Statement</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="velocitynitro">
                    <div id="velocitynitrocolor"></div>
                    <div id="velocitynitrotext1">
                        <p>VELOCITY NITRO™ 3</p>
                    </div>
                    <div id="velocitynitrotext2">
                        <p>THE WAY RUNNING SHOULD FEEL</p></div>
                    <div id="velocitynitroshop">
                        <div id="velocityshopnow">
                            <p>SHOP NOW</p>
                        </div>
                        <div id="velocityshopnitro">
                            <p>SHOP NITRO COLLECTION</p>
                        </div>
                    </div>
                    <div id="running">
                        <div id="runningshoes">
                        <video autoplay="autoplay" muted loop>
                                <source src="https://cdn.sanity.io/files/qa41whrn/prod/4a3026279df3bdb8eac79fcd2d37c6df1a4313e1.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>

                <div id="manchestercalling">
                    <div id="manchestercallingimg"></div>
                    <div id="manchestercalling1img"></div>
                    <div id="manchestercallingtext1">
                        <p>MANCHESTER CALLING</p>
                    </div>
                    <div id="manchestercallingtext2">
                        <p>24/25 MAN CITY HOME KIT</p></div>
                    <div id="manchestercallingshop">
                        <div id="manchestercallingshopnow">
                            <p>SHOP NOW</p>
                        </div>
                        <div id="manchestercallingshopcollection">
                            <p>SHOP COLLECTION</p>
                        </div>
                    </div>
                </div>

                <div id="forallthesneakers">
                    <div id="forallthesneakersimg"></div>
                    <div id="forallthesneakers1img"></div>
                    <div id="forallthesneakerstext1">
                        <p>FOR ALL THE SNEAKERHEADS</p>
                    </div>
                    <div id="forallthesneakerstext2">
                        <p>YOUR ONE-STOP SNEAKER SHOP</p>
                    </div>
                    <div id="forallthesneakersshop">
                        <div id="forallthesneakersshopnow">
                            <p>SHOP NOW</p>
                        </div>
                        <div id="forallthesneakersexplore">
                            <p>EXPLORE MORE</p>
                        </div>
                    </div>
                </div>

                <div id="pumaspotligh">
                    <div id="pumaspotlightext">
                        <p>PUMA SPOTLIGHT</p>
                    </div>
                    <div id="shoeimages">
                        <div id="shoe1">
                            <div id="shoe1img">
                                <div className="discount">
                                    <p>-53%</p>
                                </div>
                            </div>
                            <div id="show1text">
                                <div id="show1textdesc"><p>PUMA Court Shatter Low Men's Sneakers</p></div>
                                <div id="show1prices">
                                    <p>₹2,819</p>
                                    <p><s>₹5,999</s></p>
                                </div>
                            </div>
                        </div>

                        <div id="shoe2">
                            <div id="shoe2img">
                                <div className="discount">
                                    <p>-40%</p>
                                </div>
                            </div>
                            
                            <div id="show2text">
                                <div id="show2textdesc"><p>Rider Future Vintage Unisex Sneakers</p></div>
                                <div id="show2prices">
                                    <p>₹5,399</p>
                                    <p><s>₹8,999</s></p>
                                </div>
                            </div>
                        </div>

                        <div id="shoe3">
                            <div id="shoe3img">
                                <div className="discount">
                                    <p>-50%</p>
                                </div>
                            </div>
                            
                            <div id="show3text">
                                <div id="show3textdesc"><p>Cricket Square Men's Shoes</p></div>
                                <div id="show3prices">
                                    <p>₹2,499</p>
                                    <p><s>₹4,999</s></p>
                                </div>
                            </div>
                        </div>

                        <div id="shoe4">
                            <div id="shoe4img">
                                <div className="discount">
                                    <p>-55%</p>
                                </div>
                            </div>
                            
                            <div id="show4text">
                                <div id="show4textdesc"><p>Hybrid NX Men's Running Shoes</p></div>
                                <div id="show4prices">
                                    <p>₹3,369</p>
                                    <p><s>₹7,499</s></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="pumaxathletics">
                    <div id="pumaxathleticsimg"></div>
                    <div id="pumaxathletics1img"></div>
                    <div id="pumaxathleticstext1">
                        <p>PUMA x ATHLETICS</p>
                    </div>
                    <div id="pumaxathleticstext2">
                        <p>FEDERATION OF INDIA</p>
                    </div>
                    <div id="pumaxathleticstext3">
                        <p>A NEW ERA OF SPEED, STRENGTH & SPIRIT</p>
                    </div>
                    <div id="pumaxathleticslearnmore">
                        <p>LEARN MORE</p>
                    </div>
                </div>

                <div id="aswornbypumafam">
                    <div id="aswornbypumafamtext1">
                        <p>AS WORN BY PUMA FAM</p>
                    </div>
                    <div id="clicktoshop">
                        <p>Click to shop & mention us on instagram @pumaindia to be featured</p>
                    </div>
                    <div id="aswornbypumafamimgs">
                        <div id="aswornbypumafamimg1"><div className="instapic"><i class="fa-brands fa-instagram"></i></div></div>
                        <div id="aswornbypumafamimg2"><div className="instapic"><i class="fa-brands fa-instagram"></i></div></div>
                        <div id="aswornbypumafamimg3"><div className="instapic"><i class="fa-brands fa-instagram"></i></div></div>
                        <div id="aswornbypumafamimg4"><div className="instapic"><i class="fa-brands fa-instagram"></i></div></div>
                        <div id="aswornbypumafamimg5"><div className="instapic"><i class="fa-brands fa-instagram"></i></div></div>
                        <div id="aswornbypumafamimg6"><div className="instapic"><i class="fa-brands fa-instagram"></i></div></div>
                        <div id="aswornbypumafamimg7"><div className="instapic"><i class="fa-brands fa-instagram"></i></div></div>
                        <div id="aswornbypumafamimg8"><div className="instapic"><i class="fa-brands fa-instagram"></i></div></div>
                        <div id="aswornbypumafamimg9"><div className="instapic"><i class="fa-brands fa-instagram"></i></div></div>
                        <div id="aswornbypumafamimg10"><div className="instapic"><i class="fa-brands fa-instagram"></i></div></div>
                        <div id="aswornbypumafamimg11"><div className="instapic"><i class="fa-brands fa-instagram"></i></div></div>
                        <div id="aswornbypumafamimg12"><div className="instapic"><i class="fa-brands fa-instagram"></i></div></div>
                    </div>
                </div>

                <div id="recommendedforyou">
                    <div id="recommendedforyoutext">
                        <p>RECOMMENDED FOR YOU</p>
                    </div>
                    <div id="r-shoeimages">
                        <div id="r-shoe1">
                            <div id="r-shoe1img">
                                <div className="discount">
                                    <p>-53%</p>
                                </div>
                            </div>
                            <div id="r-show1text">
                                <div id="r-show1textdesc"><p>PUMA Court Shatter Low Men's Sneakers</p></div>
                                <div id="r-show1prices">
                                    <p>₹2,819</p>
                                    <p><s>₹5,999</s></p>
                                </div>
                            </div>
                        </div>

                        <div id="r-shoe2">
                            <div id="r-shoe2img">
                                <div className="discount">
                                    <p>-40%</p>
                                </div>
                            </div>
                            
                            <div id="r-show2text">
                                <div id="r-show2textdesc"><p>Smashic Unisex Sneakers</p></div>
                                <div id="r-show2prices">
                                    <p>₹2,699</p>
                                    <p><s>₹4,499</s></p>
                                </div>
                            </div>
                        </div>

                        <div id="r-shoe3">
                            <div id="r-shoe3img">
                                <div className="discount">
                                    <p>-50%</p>
                                </div>
                            </div>
                            
                            <div id="r-show3text">
                                <div id="r-show3textdesc"><p>Cricket Square Men's Shoes</p></div>
                                <div id="r-show3prices">
                                    <p>₹2,499</p>
                                    <p><s>₹4,999</s></p>
                                </div>
                            </div>
                        </div>

                        <div id="r-shoe4">
                            <div id="r-shoe4img">
                                <div className="discount">
                                    <p>-55%</p>
                                </div>
                            </div>
                            
                            <div id="r-show4text">
                                <div id="r-show4textdesc"><p>Popcat 20 Res Unisex Slides</p></div>
                                <div id="r-show4prices">
                                    <p>₹1,099</p>
                                    <p><s>₹1,999</s></p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Home;