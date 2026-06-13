# Workflow Labs — Google Sheets Form Backend Setup

## Step 1: Create Google Sheet
1. Go to https://sheet.google.com
2. Create a new sheet named "Workflow Labs Leads"
3. In row 1, add headers: `Timestamp` | `Name` | `Email` | `Phone` | `Company` | `Bottleneck`

## Step 2: Add Apps Script
1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete any existing code
3. Copy ALL content from `code.gs` in this repo and paste it
4. Click **Save** (Ctrl+S)

## Step 3: Deploy as Web App
1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web App**
4. Configure:
   - Description: "Workflow Labs Form"
   - Who has access: **Anyone**
5. Click **Deploy**
6. Click **Authorize access** and grant permissions (select your Google account)
7. Copy the **Web App URL** — it looks like:
   `https://script.google.com/macros/s/XXXXXXXXX-XXXXX/exec`

## Step 4: Add URL to Website
1. Open `index.html`
2. Find the form handler section (search for `GOOGLE_APPS_SCRIPT_URL`)
3. Replace `YOUR_WEB_APP_URL_HERE` with your Web App URL from Step 3
4. Commit and push

## Step 5: Test
Submit a form on the website — data should appear in the Google Sheet AND you get an email.

---

## How it works
- User submits form → JS POSTs JSON to Apps Script
- Apps Script saves row to Google Sheet
- Apps Script sends email to workflowlabs23@gmail.com
- User sees success message on website

## Notes
- First 100 recipients/day are free with MailApp
- Google Sheets is free with Google account
- No server, no database, no cost