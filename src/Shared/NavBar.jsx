import React from 'react';

const NavBar = () => {
    return (
        <div
        className='container mx-auto lg:px-16
        flex items-center justify-between
        lg:gap-96
        '
        >
            
        <h2 
        className="lg:text-2xl
         font-primary lg:ms-36"
        >Vocab Master
        </h2>

        <div
        className='flex items-center flex-1 font-primary text-gray-500 lg:text-1xl '
        >


            <p>Select Your language:</p>

        <select className="select w-1/3 max-w-xs lg:text-1xl "> 
          <option disabled selected>English</option>
          <option>বাংলা</option>
          <option>Hindi</option>
        </select>

        </div>

        </div>
    );
};

export default NavBar;