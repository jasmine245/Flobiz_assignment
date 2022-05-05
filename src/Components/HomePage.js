import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

import 'react-phone-number-input/style.css'
import PhoneInput from "react-phone-number-input";
import './HomePage.css';
import {setUpRecaptcha} from "../context/UserAuthContext";


function HomePage(){
   const[number,setNumber]=useState("");
   const[error, setError] = useState("");
   const[otp,setOtp] = useState("");
   const[flag, setFlag] = useState(false);
   const[confirmObj,setConfirmObj] = useState("");
   const navigate = useNavigate();

   const getOtp = async(e) => {
       e.preventDefault();
       setError("");
       if(number == "" || number === undefined)
        return alert("Please enter the valid phone number");
        try{
            const response = await setUpRecaptcha(number);
            console.log(response);
            setConfirmObj(response);
            setFlag(true);
        }catch(err){
            setError(err.message);
        }
       console.log(number);
   }

   const verifyOtp =async (e) =>{
    e.preventDefault();
    console.log(otp);
    if(otp === "" || otp === null) alert("FILL THE OTP");
    try{
        setError("");
        await confirmObj.confirm(otp);
        localStorage.setItem('number',number);
        navigate('/itempage');
        
    }catch(err){
        setError(err.message);
        alert(setError);
    }

   }
    return (
        <>
            <div className="body">
            <div className="navbar">
                <img src="https://mybillbook.in/static-assets/images/mybillbook-logo.webp" alt="logo" className="logo"/>
                <ul className="nav">
                    <li className="list active">Why Use My Bill Book?</li>
                    <li className="list">Who Is It For?</li>
                    <li className="list">Online Store</li>
                    <li className="list">Pricing</li>
                    <li className="list">FAQs</li>
                </ul>
            </div>
            <div className="login">
                <div className="heading">
                    <h1 className="head1" style={{color:"#42484f"}}>Simple GST Billing &amp; Stock Management</h1>
                    <p className="head2" style={{color:"#42484f" , fontFamily:"Raleway, sans-serif"}}>software for your business</p>
                    <h4 className="author" style={{color:"#42484f", fontFamily:"Raleway, sans-serif"}}>Atma Nirbhar Vyapaari bane</h4>
                    <div className="cert">
                    <p className="certificate" style={{color:"#42484f"}}>Made with &#10084;&#65039; in India</p>
                    <img className="certificate" src="https://mybillbook.in/static-assets/images/landing-page/iso-black.webp" alt="iso-logo"/>
                    </div>
                </div>
                <div className="form_design">
                <h2 className="p" style={{color:"#42484f"}}>Login to myBillBook</h2>
                    <form className="form" onSubmit={getOtp} style={{display : !flag ? "block" : "none"}}>
                        <label>Enter Mobile Number</label><br/><br/>
                        <PhoneInput defaultCountry="IN" placeholder="Enter Phone Number" value={number} onChange={setNumber}/>
                        {/* <input type="text" name="phone_number" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/> */}
                        <br/><br/>
                        <div id="recaptcha-container"/>
                        <br/>
                        <br/>
                        <input type="submit" value="Send OTP" name="submit" className="submit"/>
                        
                    </form>
                    <form className="form" onSubmit={verifyOtp} style={{display : flag ? "block" : "none"}}>
                        <input type="text" name="OTP" placeholder="One Time Password" onChange={(e) => setOtp(e.target.value)} />
                        <br/><br/>
                        <input type="submit" value="Login" name="submit" className="submit"/>
                        <br/>
                    </form>
                </div>
            </div>
            <div className="ratings">
                <div className="sub-ratings">
                    <h1 style={{color:"#ef7338"}}>1,00,000 +</h1>
                    <p>Businesses Trust Us</p>
                </div>
                <div className="sub-ratings">
                    <h1 style={{color:"#ef7338"}}>30,00,000 +</h1>
                    <p>Invoices Created</p>
                </div>
                <div className="sub-ratings">
                    <h1 style={{color:"#ef7338"}}>5,000 +</h1>
                    <p>Cities &amp; Towns in India</p>
                </div>
                <div className="sub-ratings">
                    <h1 style={{color:"#ef7338"}}>4.5 &#9733;</h1>
                    <p>Rating on Google Play</p>
                </div>
            </div>
            <div className="sub-div">
                <div className="sub-div-1">
                    <h1 style={{color:"#42484f",fontFamily:"Raleway, sans-serif"}}>Now try all benefits of My BillBook app</h1>
                    <h1 style={{color:"#ef7338", fontFamily:"Raleway, sans-serif"}}>Free for 14 days</h1>
                </div>
                <div className="sub-div-2"> 
                    <img src={require("../images/360_F_206446183_lySithb7utSi89CwZPBzb6uoBbPgtcwV.jpg")} alt="logo-gurantee" className="logo-g"/>
                </div>
            </div>
            <div className="price">
                <div className="silver">
                    <div className="card-text">
                        <img src="https://mybillbook.in/static-assets/images/pricing%20page/bluecrown.svg" alt="silver-logo" className="price-logo"/>
                        <h3>Silver Plan</h3>
                        <div className="pricing">
                            <pre className="price-tag line">&#8377;1299</pre>
                            <pre className="price-tag"> </pre>
                            <h2 className="price-tag">  &#8377; 799</h2>
                            <pre className="price-tag"> / year</pre>
                        </div>
                    </div>
                    <div className="tag">
                        <p>Mobile + Desktop</p>
                    </div>
                    <div>
                        <ul>
                            <li className="tick"> Unlimited Stock Adjustments</li>
                            <li className="tick"> GST Reports, Profits &amp; Loss Report</li>
                            <li className="tick"> Remove MyBillBook logo from invoice</li>
                            <li className="tick"> Only Mobile device supported</li>
                            <li className="tick"> + 5 more features</li>
                        </ul>
                    </div>
                </div>
                <div className="gold">
                <div className="red-pos">
                            <div className="red-flag">
                                <p style={{fontFamily:"Raleway, sans-serif"}}>Most Popular</p>
                            </div>
                        </div>
                    <div className="card-text gold-price">
                        <img src={require("../images/unnamed.png")} style={{width:"17%"}} alt="gold-logo" className="price-logo"/>
                        <h3>Gold Plan</h3>
                        <div className="pricing">
                            <pre className="price-tag line">&#8377;2599</pre>
                            <pre className="price-tag"> </pre>
                            <h2 className="price-tag">  &#8377; 1799</h2>
                            <pre className="price-tag"> / year</pre>
                        </div>
                    </div>
                    <div className="tag" style={{position:"relative", top:"-15%"}}>
                        <p>Mobile + Desktop</p>
                    </div>
                    <div style={{position:"relative", top:"-15%"}}>
                        <ul>
                            <li className="tick"> All Silver Features</li>
                            <li className="tick"> Add <strong>upto 5 stall </strong>to My BillBook</li>
                            <li className="tick"> Unlimited Mobile + Desktop Logins</li>
                        </ul>
                    </div>
                </div>
                <div className="diamond">
                    <div className="card-text">
                        <img src="https://mybillbook.in/static-assets/images/pricing%20page/goldencrown.svg" alt="diamond-logo" className="price-logo"/>
                        <h3>Diamond Plan</h3>
                        <div className="pricing">
                            <pre className="price-tag line">&#8377;4599</pre>
                            <pre className="price-tag"> </pre>
                            <h2 className="price-tag">  &#8377; 3500</h2>
                            <pre className="price-tag"> / year</pre>
                        </div>
                    </div>
                    <div className="tag">
                        <p>Mobile + Desktop</p>
                    </div>
                    <div>
                        <ul>
                            <li className="tick"> All Gold &amp; Silver Features</li>
                            <li className="tick"> Add <strong>unlimited staff </strong>to My BillBook</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-card-1">
                    <div>
                        <h3 style={{color:"#ef7338"}}>Get in touch</h3>
                        <p>help@flobiz.in</p>
                        <h2>+91 74004 17400</h2>
                    </div>
                    <div>
                        <button className="button whatsapp"><i class="fa fa-whatsapp"></i> WhatsApp us</button>
                        <button className="chat button"><i class='fa fa-comment'></i> Chat with us</button>
                    </div>
                </div>
                <div className="footer-card-2">
                    <h3 style={{color:"#ef7338"}}>Information</h3>
                    <p>Refund Policy</p>
                    <p>Privacy Policy</p>
                    <p>Terms &amp; Conditions</p>
                </div>
                <div className="footer-card-3">
                    <h3>&nbsp;</h3>
                    <p>FAQs</p>
                    <p>Pricing</p>
                    <p>Flobiz Business Group</p>
                    <p>Blogs</p>
                </div>
                <div className="footer-card-4">
                    <div>
                        <h3 style={{color:"#ef7338"}}>Follow Us</h3>
                    </div>
                    <div className="social-media-links">
                        <a href="#" className="social-link">
                            <img src="https://mybillbook.in/static-assets/images/landing-page/youtube.webp" alt="youtube-logo"/>
                        </a>
                        <a href="#" className="social-link">
                            <img src="https://mybillbook.in/static-assets/images/landing-page/facebook_Icon.webp" alt="facebook-logo"/>
                        </a>
                        <a href="#" className="social-link">
                            <img src="https://mybillbook.in/static-assets/images/landing-page/instagram.webp" alt="insta-logo"/>
                        </a>
                        <a href="#" className="social-link">
                            <img src="https://mybillbook.in/static-assets/images/landing-page/twitter-icon.webp" alt="twitter-logo"/>
                        </a>
                        <a href="#" className="social-link">
                            <img src="https://mybillbook.in/static-assets/images/landing-page/linkedin-icon.webp" alt="linkedIn-logo"/>
                        </a>                                              
                    </div>
                    <div>
                        <h3>FloBooks is a product by <a href="#">FloBiz</a></h3>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default HomePage;