// Configuration for handling Demo Requests & Leads
// You can paste your Google Apps Script Web App URL here or in .env as VITE_GOOGLE_SHEET_URL

export const LEADS_CONFIG = {
  // Option 3: Google Sheets Webhook URL (Live Deployed)
  googleSheetWebhookUrl: import.meta.env.VITE_GOOGLE_SHEET_URL || 'https://script.google.com/macros/s/AKfycbzeR0kQmH4lHXOJu9qzCYbozen_dAk0mLZhfMQWg95Yjb963HQvXs8kBprVbgq3_mPr/exec',
  
  // Notification email where Google Apps Script sends lead alerts
  notificationEmail: 'harshjaiswal183@gmail.com',

  // Enable direct WhatsApp notification button after submission
  enableWhatsAppRedirect: true,
};

