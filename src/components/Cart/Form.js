import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // to receive the message and auto-reply
import swal from 'sweetalert'; //  npm install sweetalert --save
import '../Styling/Form.css'


// npm i @emailjs/browser 
var cond = false; // in order to render a div based on collection method. If cond is not satisfied then don't render anything, else render our site address

const Form = () => {
    const [collectMethod, setCollectMethod] = useState('test')

    const handleSelect = (e) => {
        console.log(e.target.value)
        console.log(setCollectMethod(e.target.value)
        )
        setCollectMethod(e.target.value)
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wnvjbmc', 'template_6t03lfw', form.current, 'ug0blzHMhGz4I5o6P') // you can get keys when you create an account on EmailJS
            .then((result) => {
                console.log(result.text);  // if the order was sent successfully this code is executed
                var cond = true;
                console.log(cond)
            }, (error) => {
                console.log(error.text); // if the order was NOT sent successfully this code is executed
            });


            swal("Order Sent!", "It will be ready within 2 hours!", "success");

        e.target.reset()

    };

    return (
        <div className="form-and-map">
            <form ref={form} onSubmit={sendEmail} className='order-form'>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Phone Number</label>
                <input type="text" name="user_number" />
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


            {/*   https://google-map-generator.com/ */}
            {/* <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="501" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=LTUC&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>


                </div>

                <button onClick={testAlert}> Test </button>

            </div> */}

        </div>

    );
};

export default Form;




