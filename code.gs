/**
 * Workflow Labs — Form Backend
 * 
 * SETUP:
 * 1. Create a new Google Sheet at sheet.google.com
 * 2. Go to Extensions > Apps Script
 * 3. Paste this ENTIRE code (replacing existing)
 * 4. Save (Ctrl+S), then Deploy > New deployment
 * 5. Type: Web App, Who has access: Anyone
 * 6. Authorize, copy the Web App URL
 * 7. Paste that URL in index.html form-handler section
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var params = JSON.parse(e.postData.contents);

  var timestamp = new Date();
  var name = params.name || '';
  var email = params.email || '';
  var phone = params.phone || '';
  var company = params.company || '';
  var pain = params.pain || '';

  // Append to sheet (headers auto: Timestamp | Name | Email | Phone | Company | Bottleneck)
  sheet.appendRow([timestamp, name, email, phone, company, pain]);

  // Send email notification
  var subject = 'New Lead: ' + name + ' from ' + (company || 'No Company');
  var body = 'Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nCompany: ' + company + '\nBottleneck: ' + pain;
  
  MailApp.sendEmail({
    to: 'workflowlabs23@gmail.com',
    subject: subject,
    body: body
  });

  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}