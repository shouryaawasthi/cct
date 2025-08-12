import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';
import nofound from '../assets/images/nofound.png'

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Image Section */}
      <div>
        <LazyImage
          src={nofound}
          alt="404 Not Found"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg "   
        />
      </div>

    
      <div >
       

        {/* Button to Go Back to Home */}
        <Link
          to="/"
          className="
           px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-red-700 transition duration-200 ease-in-out"
        >
          Go Back Home
        </Link>
      </div>

     
    </div>
  );
};

export default NotFound;
