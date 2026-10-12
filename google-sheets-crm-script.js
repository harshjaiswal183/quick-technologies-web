/**
 * ==============================================================================
 * QUICK TECHNOLOGIES - GOOGLE SHEETS CRM & LEAD NOTIFIER SCRIPT
 * ==============================================================================
 * 
 * Yeh script aapki Google Sheet me demo requests ko auto-save karta hai aur
 * aapke Gmail (harshjaiswal183@gmail.com) par turant email alert bhejta hai.
 * 
 * SETUP INSTRUCTIONS (Sirf 2 Minute Lagte Hain):
 * ------------------------------------------------------------------------------
 * 1. Open Google Sheets (https://sheets.new)
 * 2. Sheet ka naam rakhein: "Quick Technologies - Demo Leads"
 * 3. Menu me click karein: Extensions > Apps Script
 * 4. Jo code khule, use delete karke yeh pura code paste kar dein.
 * 5. Upar "Save" icon (disk) par click karein.
 * 6. Top-right me "Deploy" button dabayein > "New deployment" select karein.
 * 7. Settings:
 *    - Select type (gear icon) > "Web app"
 *    - Description: "Demo Leads Webhook"
 *    - Execute as: "Me (your email)"
 *    - Who has access: "Anyone" (CRITICAL: 'Anyone' select karein taaki website se data aa sake)
 * 8. "Deploy" par click karein. (Agar permission maange toh 'Review permissions' > 'Advanced' > 'Go to Quick Technologies (unsafe)' > 'Allow' karein).
 * 9. Jo "Web app URL" milega (https://script.google.com/macros/s/.../exec):
 *    Use copy karein aur apni website ke `src/config/leadsConfig.ts` me paste kar dein!
 * ==============================================================================
 */

// Aapki email jahan lead alert aayega
var NOTIFICATION_EMAIL = "harshjaiswal183@gmail.com";

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Check if headers exist, if not, create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Phone Number",
        "Email Address",
        "Company Name",
        "Selected Service",
        "Preferred Contact Method",
        "Requirements / Message",
        "Lead Status"
      ]);
      
      // Style headers
      var headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setBackground("#0F172A");
      headerRange.setFontColor("#38BDF8");
      headerRange.setFontWeight("bold");
      sheet.setFrozenRows(1);
    }
    
    // Parse incoming data (supports JSON or Form post)
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }
    
    var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    var fullName = data.fullName || data.name || "N/A";
    var phone = data.phone || "N/A";
    var email = data.email || "N/A";
    var companyName = data.companyName || data.company || "Individual / Not specified";
    var service = data.service || "General Inquiry";
    var contactMethod = data.contactMethod || "WhatsApp";
    var requirements = data.requirements || data.message || "N/A";
    
    // Append row in Google Sheet
    sheet.appendRow([
      timestamp,
      fullName,
      phone,
      email,
      companyName,
      service,
      contactMethod,
      requirements,
      "New Lead 🔥"
    ]);
    
    // Send email alert to admin Gmail
    if (NOTIFICATION_EMAIL) {
      var subject = "🔥 New Demo Request: " + fullName + " - " + service;
      var body = "Hi Quick Technologies Team,\n\n" +
                 "A new client has submitted a Demo Request on your website:\n\n" +
                 "--------------------------------------------------\n" +
                 "• Name: " + fullName + "\n" +
                 "• Phone: " + phone + "\n" +
                 "• Email: " + email + "\n" +
                 "• Company: " + companyName + "\n" +
                 "• Requested Service: " + service + "\n" +
                 "• Preferred Contact: " + contactMethod + "\n" +
                 "• Requirements: " + requirements + "\n" +
                 "• Date & Time: " + timestamp + " IST\n" +
                 "--------------------------------------------------\n\n" +
                 "👉 Directly Call or WhatsApp: " + phone + "\n\n" +
                 "View all leads in your Google Sheet: " + SpreadsheetApp.getActiveSpreadsheet().getUrl();
      
      MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      message: "Lead recorded successfully and notification sent."
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Health check endpoint
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    app: "Quick Technologies Leads CRM Webhook"
  })).setMimeType(ContentService.MimeType.JSON);
}
