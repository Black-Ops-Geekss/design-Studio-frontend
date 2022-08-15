import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // to receive the message and auto-reply
import swal from 'sweetalert'; //  npm install sweetalert --save
// import {addedItem} from './../../../src/components/homePage/ClickedCard';
import '../../Styling/Form.css'
import axios from "axios";


// npm i @emailjs/browser 
var cond = false; // in order to render a div based on collection method. If cond is not satisfied then don't render anything, else render our site address

export default function Form () {
    const [collectMethod, setCollectMethod] = useState('test')
    const [userArray, setUserArray] = useState([])

    const handleSelect = (e) => {
        console.log(e.target.value)
        console.log(setCollectMethod(e.target.value)
        )
        setCollectMethod(e.target.value)
    }
    const form = useRef();

    
    
    
    useEffect(() => {
        setUserArray(JSON.parse(localStorage.getItem('addedItemKey')))

    });
    
    
    const sendEmail = async(e) => {
        e.preventDefault();
        let a = JSON.parse(localStorage.getItem('addedItemKey'))
        
        let order ={
            "name": e.target.name.value,
            "email": e.target.email.value,
            "phone": e.target.phone.value
        }
        console.log(order);

        const newOrder = {
            "name": order.name,
            "email": order.email,
            "phone": order.phone,
            "items": a,
        }

        await axios.post('http://localhost:3001/userRequest', {newOrder}).then(()=>{
                    // emailjs.sendForm('service_wnvjbmc', 'template_6t03lfw', form.current, 'ug0blzHMhGz4I5o6P') // you can get keys when you create an account on EmailJS
                    //     .then((result) => {
                    //         console.log(result.text);  // if the order was sent successfully this code is executed
                    //         var cond = true;
                    //         console.log(cond)
                    //     }, (error) => {
                    //         console.log(error.text); // if the order was NOT sent successfully this code is executed
                    //     });
            
                    localStorage.removeItem('addedItemKey')
                        swal("Order Sent!", "It will be ready within 2 hours!", "success");
            
                    e.target.reset()
                    // window.location.reload(false);
        }
        ).catch(err => {
            console.log(err);
        }
        )


    };

    return (
        <div>
            <div>
            {userArray&&(
                <>
                {userArray.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item} alt="aaaa" />
                        </div>
                    )
                }
                )}
                </>
            )


            }
            </div>
        <div className="form-and-map">
            <form ref={form} onSubmit={sendEmail} className='order-form'>
                <label>Name</label>
                <input id="name" type="text" name="user_name" />
                <label>Email</label>
                <input id="email" type="text" name="user_email" />
                <label>Phone Number</label>
                <input id="phone" type="text" name="user_number" />
                <br></br>
                <label>Collecting Method</label>
                <select name='delivery' value={collectMethod} onChange={handleSelect}>

                    <option value="none">Pick in Person</option>
                    <option value="deliver">Deliver to my Home</option>
                </select>

                {collectMethod === 'deliver' &&
                    <div>
                        <label>Insert your home address</label>
                        <input type="text" name="user_address" />
                    </div>

                }

                
                <label>Add more details if you wish:</label>
                <textarea name="message" />


                <input type="submit" value="Send" />

            </form>

        </div>
        </div>

    );
};






