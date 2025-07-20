// EmailJS Configuration
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "wfV8o_8kp23p8X97s",
  SERVICE_ID: "service_oco4zsv",
  TEMPLATE_ID: "template_tgs2ffm"
};

// EmailJS Template Parameters Interface
export interface EmailTemplateParams {
  name: string;
  birthDate: string;
  state: string;
  school: string;
  phone: string;
  email: string;
  telegramId: string;
  quranMemorization: string;
  recitationType: string;
  tajweedLevel: string;
  preferredTime: string;
  [key: string]: string; // Index signature for dynamic properties
}

// EmailJS Helper Functions
export const initializeEmailJS = () => {
  if (typeof window !== 'undefined') {
    const { init } = require('@emailjs/browser');
    init(EMAILJS_CONFIG.PUBLIC_KEY);
  }
};

export const sendEmail = async (templateParams: EmailTemplateParams) => {
  if (typeof window !== 'undefined') {
    const { send } = require('@emailjs/browser');
    return await send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );
  }
  throw new Error('EmailJS is not available in server-side rendering');
}; 