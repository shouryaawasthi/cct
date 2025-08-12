import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import WhatsAppButton from './components/WhatsappButton';
import InquiryModal from './components/InquiryModal'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [showModal, setShowModal] = useState(false);

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
  return (
    <>
    <div className='overflow-x-hidden'>
     <ToastContainer position="top-right" autoClose={2000} />
      <AppRoutes />
      <WhatsAppButton />
      {showModal && <InquiryModal onClose={() => setShowModal(false)} />}
        </div>
    </>
  );
}

export default App;
