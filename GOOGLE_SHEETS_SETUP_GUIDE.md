# Quick Technologies - Google Sheets CRM Setup Guide (Option 3)

Yeh guide aapko 2 minute me Google Sheets ko aapki website ke **Demo Request Form** se connect karna sikhayegi. Iske baad jab bhi koi client demo request submit karega:
1. **Google Sheet me nayi row add hogi** (Client Name, Phone, Email, Company, Service, Message, Time).
2. **Aapki email (`harshjaiswal183@gmail.com`) par turant notification aayega**.
3. **100% Free** forever — kisi server ya backend hosting ki zaroorat nahi!

---

## Step-by-Step Setup (Sirf 2 Minute):

### Step 1: Nayi Google Sheet banayein
1. Apne browser me open karein: [https://sheets.new](https://sheets.new)
2. Sheet ka title upar rakhein: **`Quick Technologies - Leads`**

### Step 2: Apps Script kholiye
1. Upar menu me click karein: **`Extensions`** > **`Apps Script`**
2. Jo default code dikhe use select all karke delete kar dein.

### Step 3: Code Paste karein
1. Project me bani file [`google-sheets-crm-script.js`](./google-sheets-crm-script.js) ka pura code copy karein.
2. Apps Script editor me paste kar dein.
3. Upar **Save (disk icon 💾)** par click karein.

### Step 4: Web App ki tarah Deploy karein (Most Important)
1. Top-right corner me blue button **`Deploy`** par click karein > **`New deployment`** chunein.
2. Left side me gear icon ⚙️ par click karke **`Web app`** select karein.
3. Form me yeh options bharein:
   - **Description**: `Leads Webhook`
   - **Execute as**: `Me (your email)`
   - **Who has access**: **`Anyone`**  *(Dhyan rahe: 'Anyone' zaroor select karein taaki website data bhej sake)*
4. **`Deploy`** button dabayein.
5. Agar Google popup dikhaye:
   - Click **`Review permissions`**
   - Apna Google account chunein
   - Click **`Advanced`** (neeche chhota link)
   - Click **`Go to Quick Technologies (unsafe)`**
   - Click **`Allow`**

### Step 5: Web App URL copy karein aur Website me daalein
1. Deploy hone ke baad aapko ek **Web app URL** milega:
   `https://script.google.com/macros/s/AKfycbx.../exec`
2. Is URL ko copy karein.
3. Apni website ki file [`src/config/leadsConfig.ts`](./src/config/leadsConfig.ts) me paste kar dein:
   ```typescript
   export const LEADS_CONFIG = {
     googleSheetWebhookUrl: 'https://script.google.com/macros/s/YOUR_COPIED_URL/exec',
     ...
   };
   ```
   *(Ya fir `.env` file me `VITE_GOOGLE_SHEET_URL=https://...` daal dein)*.

---

## Testing:
1. Website par jaakar Demo Request Form bharein aur submit karein.
2. Apni Google Sheet check karein — turant client ki details row me dikh jayengi!
3. Apna Gmail inbox check karein — lead alert notification email aa chuki hogi!
