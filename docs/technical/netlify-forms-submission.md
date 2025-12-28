---
title: "Form submissions"
description: "Manage form submissions in our UI or through our API. Learn how to delete a form and its submissions if needed."
---

This document covers features you can use to manage your form submissions and recommendations for sensitive data. To learn how you can be made aware of new form submissions, visit our [form notifications](/manage/forms/notifications) page.

## Form submissions UI

You can find all submissions to your Netlify forms in your site's 
### NavigationPath Component:

Forms
 tab. Select a form name from the **Active forms** list to access the submissions for that form. By default, only verified submissions are listed. You can switch to [spam submissions](/manage/forms/spam-filters) using a menu above the list.

### Note - Note

If you've [disabled form detection](/manage/forms/setup#disable-form-detection), Netlify will not process any new or changed forms in your HTML files during deploys. You can still access form submissions for any preexisting and unchanged forms, but any newly deployed or updated forms won't support new submissions while form detection is disabled.

### Submission summary display

Each form submission in the list displays a summary to help you identify it. The summary is generated based on your form's HTML structure in the following priority order:

1. **Title and body combination**: If your form has a title and/or body field, these are combined in the summary.
2. **First field with data**: If no title or body field exists, the summary displays the value from the first field that contains data. For file upload fields, the filename is shown.

The title and body are identified by **field type**, not field name:

- **Title**: The first text `<input>` element that is not hidden and not an email-related field. Email-related fields are those with `type="email"` or names matching `email`, `mail`, `from`, `twitter`, or `sender` (case-insensitive). If no matching input is found, Netlify falls back to looking for a field named exactly `title` or `subject` (case-insensitive).
- **Body**: The first `<textarea>` element in the form, regardless of its name.

This means the order of fields in your HTML affects which values appear in the summary.

### Export form submissions to CSV

You can export verified form submissions to a CSV file. From the **Forms** tab, select the form you want to export, then select **Download as CSV** near the top of the form detail page.

### Change a form submission's state

You can change the state of a submission from spam to verified or vice versa. To do so, check the box next to each submission title to select one or multiple submissions and then use the **Mark as spam** or **Mark as verified** button. 

### Delete a form submission

You can delete both verified submissions and spam submissions. To do so, check the box next to each submission title to select one or multiple submissions. After you select the submissions, a red **Delete submission** button will become available. When you select **Delete submission**, you'll be prompted to confirm the deleting action. Once you confirm, your selected submissions will be deleted permanently.

### Delete a form

You can delete a form and all of its submissions by selecting **Delete form**. You'll be prompted to confirm the deleting action. Once you confirm, future submissions to the form will result in a `404` error and previous submissions will no longer be available. You may want to [export form submissions to CSV](/manage/forms/submissions#export-form-submissions-to-csv) before you delete your form. 

## API endpoints

You can use the [API](/api-and-cli-guides/api-guides/get-started-with-api#forms) to get verified/spam submissions, delete submissions, delete forms, and more.

## File uploads

When a form is submitted with one or more [file uploads](/manage/forms/setup#file-uploads), a link to each uploaded file will be included in the form submission details. These are accessible in the Netlify app, in email notifications, in CSV exports, and from our API.

After you delete a form, the file uploads are still available by their direct URL for 24 hours because of the way caching works for forms by default.

## Manage sensitive form data

Form submission data is securely stored in our user database. If your form collects personally identifiable information (PII), we recommend that you actively manage the data by exporting form submissions and deleting them regularly.

Forms that include file uploads with personally identifiable information should use the [Very Good Security](https://www.netlify.com/integrations/very-good-security/) integration to protect this data.

## Automatic sanitization

Our form handling automatically sanitizes form submissions to keep your site and business secure. Any code that gets submitted through Netlify Forms, such as `<script>` tags or anything else that could be harmful, is neutralized.

Take for example the following code:

```html
<script>alert('Surprise!');</script>
```

If someone tries to submit this through your form, we transform the code into the following to make it harmless:

```
&lt;script&gt;alert('Surprise!')&lt;/script&gt;
```

## Form-triggered functions

You can integrate your forms with Netlify Functions by triggering a serverless function when a form submission is verified. Find out more in the [Functions](/build/functions/trigger-on-events) docs.
