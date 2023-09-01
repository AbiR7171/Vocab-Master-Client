import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <div>
            <div className='flex  items-center justify-center gap-3 mt-10'>
            <Link to="/docs">
              <p className=" hover:text-black text-gray-400 font-bold transition  btn-link">Docs</p>
            </Link>
                <Link className='hover:text-black text-gray-400 font-bold transition'>ABOUT</Link>
                <Link className='hover:text-black text-gray-400 font-bold'>BLOG</Link>
                <Link className='hover:text-black text-gray-400 font-bold'>TERMS</Link>
                <Link className='hover:text-black text-gray-400 font-bold'>PRIVACY</Link>
            </div>
        </div>
    );
};

export default Features;