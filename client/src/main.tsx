import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Map Vite build-time envs to window for runtime checks
if (typeof window !== 'undefined') {
  (window as any).EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || (window as any).EMAILJS_PUBLIC_KEY;
  (window as any).EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || (window as any).EMAILJS_SERVICE_ID;
  (window as any).EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || (window as any).EMAILJS_TEMPLATE_ID;
  
  // Optional convenience object
  (window as any).emailConfig = (window as any).emailConfig || {
    publicKey: (window as any).EMAILJS_PUBLIC_KEY,
    serviceId: (window as any).EMAILJS_SERVICE_ID,
    templateId: (window as any).EMAILJS_TEMPLATE_ID
  };
}

createRoot(document.getElementById("root")!).render(<App />);
