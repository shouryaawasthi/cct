import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import WhatsAppButton from './components/WhatsappButton';
import InquiryModal from './components/InquiryModal'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactGA from "react-ga4";
import { useLocation } from 'react-router-dom';



function App() {
   const location = useLocation();
   useEffect(() => {
    ReactGA.initialize("G-3X2WBP633L");
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000); 

   


    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  AOS.init({
    duration: 2000, 
    once: true,     
  });
}, []);
 const isAdminRoute = location.pathname.startsWith('/admin');
  return (
    <>
  
    <div className='overflow-x-hidden'>
     <ToastContainer position="top-right" autoClose={2000} />
      <AppRoutes />
    
      
      
      {!isAdminRoute && showModal && (
          <InquiryModal onClose={() => setShowModal(false)} />
        )}
        {!isAdminRoute && showWhatsapp && (
        
          <WhatsAppButton onClose={()=>setShowWhatsapp(false)}/>
        )}
        </div>
    </>
  );
}

export default App;
