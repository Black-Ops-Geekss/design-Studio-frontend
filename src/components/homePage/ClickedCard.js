import axios from 'axios';
import { useEffect, useState } from 'react';
// import { Spinner } from 'react-bootstrap';
import LoadingSpinner from './Spinner';
import { useParams } from 'react-router-dom';




localStorage.setItem('addedItemKey', "null")
export default function ClickedCard() {


    const [Url, setUrl] = useState('');
    const [removedItem, setRemovedItem] = useState('');

    const { id } = useParams();

    const getDesign = async (selectedId) => {
        await axios.get(`http://localhost:3001/getSelection/${selectedId}`).then(res => {
            setUrl(res.data[0].url);
            removeBG(res.data[0].url);
        }).catch(err => {
            console.log(err);
        });
        console.log(Url);
    }
    // console.log(id);

    useEffect(() => {
        getDesign(id);
    }, []);

    const removeBG = async (AD) => {

    //     const encodedParams = new URLSearchParams();
    //     console.log(Url);

    //     encodedParams.append("image_url", AD);

    //     const options = {
    //         method: 'POST',
    //         url: 'https://background-removal.p.rapidapi.com/remove',
    //         headers: {
    //             'content-type': 'application/x-www-form-urlencoded',
    //             'X-RapidAPI-Key': '17bca93844msh56b9f5968f8ddf8p1ad44cjsn500e495feb5b',
    //             'X-RapidAPI-Host': 'background-removal.p.rapidapi.com'
    //         },
    //         data: encodedParams
    //     };

    //    await axios.request(options).then(function (response) {
    //         console.log(response.data);
    //         setRemovedItem(response.data.response.image_url);
    //     }).catch(function (error) {
            
    //         console.error(error);
    //     });

    }


    const handlerAddToCart = (e) => {
        e.preventDefault();

        if (localStorage.getItem('addedItemKey') === "null") {
            localStorage.setItem('addedItemKey', JSON.stringify([Url]));
        } else {
            let userCart = JSON.parse(localStorage.getItem('addedItemKey'));
            userCart.push(Url);
            localStorage.setItem('addedItemKey', JSON.stringify(userCart));
        }
    }


    return (
        <div>
            
            {!removedItem&&
            <LoadingSpinner />
            }

            <img src={removedItem?removedItem:Url} alt="Design"  style={{width: "200px"}}/>

            <form onSubmit={handlerAddToCart}>

                <button type="submit" className="btn btn-primary">Add to Cart</button>
            </form>

            {
                // render the chosen image from Cards.js here

            }

        </div>
    )
}

