import React from 'react';
import EachBook from './EachBook';

export default function AllBooks() {
    return (
        <div className='d-flex justify-content-around flex-wrap'>
           <EachBook/> 
        </div>
    )
}
