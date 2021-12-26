import React from 'react';
import BooksTitle from './Books/BooksTitle/BooksTitle'; 
import { useEffect} from 'react';
import WebFont from "webfontloader";
import AllBooks from './Books/BooksAPI/AllBooks';
import Footer from '../Footer/Footer';

export default function Books() {

    useEffect(() => {
        WebFont.load({
            google: {
              families: ["Roboto Condensed","Alfa Slab One"],
            },
          });
       
    }, [])

    return (
        <div className='container-fluid m-0 p-0' style={{ fontFamily: "Roboto Condensed" }}>
         <BooksTitle/> 
         <AllBooks/>
         <Footer/>
        </div>
    )
}
