import { X } from 'lucide-react';
import ContactForm from './ContactForm';

export default function InquiryModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={25 } />
        </button>

        <ContactForm />

        
      </div>
      <style>{modalStyles}</style>
    </div>
  );
}

const modalStyles = `
  .modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex; justify-content: center; align-items: center;
    z-index: 1000;
    padding: 1rem;
  }

  .modal-content {
    background: #fff;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 400px;
    padding: 2rem 1.5rem;
    position: relative;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    box-sizing: border-box;
  }

  .modal-close-btn {
    background: none;
    border: none;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    color: #333;
  }

  form input,
  form textarea {
    width: 100%;
    padding: 0.625rem 0.75rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-size: 1rem;
    box-sizing: border-box;
    resize: vertical;
  }



  .btn {
    padding: 0.625rem 1rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn-secondary {
    background-color: #6c757d;
    color: white;
  }

  .btn-secondary:hover {
    background-color: #5a6268;
  }

  @media (max-width: 480px) {
    .modal-content {
      max-width: 90%;
      padding: 1.5rem 1rem;
    }

    .modal-close-btn {
      top: 0.75rem;
      right: 0.75rem;
    }
  }
`;
