---
title: "Forms setup"
description: "Use built-in form handling to simplify adding and managing forms for your project. There's no need to make an API call or include extra form handling code."
---

Netlify's serverless form handling allows you to manage forms without extra API calls or additional JavaScript. Once enabled, the built-in form detection feature allows our build system to automatically parse your HTML at deploy time, so there's no need for you to make an API call or include extra JavaScript on your site.

To get started, enable [automatic form detection](#automatic-form-detection) and then add a `netlify` attribute to your [HTML form](#html-forms).

### Tip - Wondering how Netlify handles form submissions?

Visit our [form submissions](/manage/forms/submissions) doc to learn more about the form submissions UI, API endpoints, and more.

## Automatic form detection

If you would like Netlify to automatically manage your form submissions, you need to enable form detection.

### Enable form detection

To enable form detection for your site:

1. In the Netlify UI, go to 
### NavigationPath Component:

Forms
.

2. Select **Enable form detection**.

Starting with your next site deploy, Netlify will automatically scan your deploys for forms that require submission handling.

If you previously used Netlify Forms and disabled automatic form detection, follow the steps to [re-enable form detection](#re-enable-form-detection) and start accepting submissions again.

### Disable form detection

You may want to disable form detection if your site doesn't have forms anymore or if you decide not to use Netlify to manage your forms. Disabling form detection will reduce post processing and may speed up deploys.

To disable form detection for your site:

1. In the Netlify UI, go to 
### NavigationPath Component:

Forms > Usage and configuration > Form detection
.

2. Select **Disable form detection**.

3. A confirmation prompt will appear. To continue, enter the name of your site and select **Disable form detection**.

Starting with your next site deploy, Netlify will no longer scan your deploys for forms and will disable [form submission](/manage/forms/submissions#form-submissions-ui) handling for any new or updated forms.

### Caution - Warning

Disabling form detection is intended only for sites that don't use Netlify Forms. If your site does use Netlify Forms, we recommend removing forms from your site code or altering your code to handle submissions by other means before disabling form detection.

### Re-enable form detection

If you previously used Netlify Forms and disabled automatic form detection, follow these steps to re-enable form detection:

1. In the Netlify UI, go to 
### NavigationPath Component:

Forms > Usage and configuration > Form detection
.

2. Select **Enable form detection**.

3. Redeploy your site.

Once you redeploy your site, Netlify will automatically scan your deploys for forms and start accepting submissions again.

## HTML forms

Once you [enable form detection](#enable-form-detection), add an HTML form to your site with a `data-netlify="true"` or a `netlify` attribute in the `<form>` tag. Deploy your site with that form included and you can start receiving [submissions](/manage/forms/submissions) in your Netlify site admin panel.

Your form's `name` attribute determines what we call the form in the Netlify UI. If you have more than one form on a site, each form should have a different `name` attribute.

Here's an example of how to use the `data-netlify="true"` attribute or the `netlify` attribute in your form:

### Tabs Component:

<TabItem label="Form with data-netlify attribute">
```html
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: </label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
```
</TabItem>

<TabItem label="Form with netlify attribute">
```html
<form name="contact" method="POST" netlify>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: </label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
```
</TabItem>

When Netlify parses the static HTML for a form you've added, the build system automatically strips the `data-netlify="true"` or `netlify` attribute from the `<form>` tag and injects a hidden input named `form-name`. In the resulting HTML that's deployed, the `data-netlify="true"` or `netlify` attribute is gone, and the hidden `form-name` input's `value` matches the `name` attribute of `<form>` like this:

```html
<input type="hidden" name="form-name" value="contact" />
```

### Submit HTML forms with AJAX

You don't have to, but you can submit static HTML forms using AJAX.

A static HTML form submitted this way must have `data-netlify=true` or a `netlify` attribute inside its `<form>` tag. For an example of how to set these attributes, review the [HTML forms](#html-forms) section.

Here's an AJAX form submission example using the `fetch` API for a static HTML form:

```js
const handleSubmit = event => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => console.log("Form successfully submitted"))
    .catch(error => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);
```

Requirements for the request:

- The body of the request must be URL-encoded. In the above example, the form is passed to a `FormData` constructor. That object is then encoded using the `URLSearchParams` constructor and converted to a string. Note that Netlify Forms does not support JSON form data at this time.
- If the form accepts alphanumeric data only, the request should include the header `"Content-Type": "application/x-www-form-urlencoded"`. If the form accepts [file uploads](/manage/forms/setup#file-uploads), including a `Content-Type` header is not recommended.

## JavaScript forms

You don't need to include extra JavaScript on your site to use Netlify Forms. But, if you want to, you can use JavaScript to render a form client-side. You can also submit JavaScript-rendered forms over AJAX.

### Forms for Next.js or SSR frameworks

If you're using a pure JavaScript form or SSR (Server Side Rendering), you must include an HTML form that meets this [HTML form criteria](https://answers.netlify.com/t/support-guide-form-problems-form-debugging-404-when-submitting/92#p-141-form-handling-works-automatically-for-html-forms-that-meet-the-following-requirements-2), including all the input tags with the same names as the JavaScript form.

For instructions and examples specific to Next.js 13.5 and above, visit [breaking changes for the Next.js runtime](/build/frameworks/framework-setup-guides/nextjs/overview#v5-breaking-changes).

### Work with JavaScript-rendered forms

The Netlify build system finds your forms by parsing the HTML of your site when the build completes. This means that if you're using JavaScript to render a form client-side, our build system won't find it in the pre-built files. You can work around this:

- Create a hidden HTML form with the `data-netlify="true"` attribute or a `netlify` attribute and input fields with `name` attributes to match the inputs of your JavaScript-rendered form. You need to apply the same work around if you want to use our [reCAPTCHA 2 integration](/manage/forms/spam-filters#recaptcha-2-challenge), and create a `div` element in the hidden HTML with the `data-netlify-recaptcha="true"` attribute.
- Add a hidden input to the JavaScript-rendered form or JSX form:

  ```jsx
  <input type="hidden" name="form-name" value="name_of_my_form" />
  ```

You can also find related tutorials on our blog:

- [How to Integrate Netlify's Form Handling in a React App](https://www.netlify.com/blog/2017/07/19/how-to-integrate-netlifys-form-handling-in-a-react-app/)
- [How to Integrate Netlify forms in a Vue App](https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/)

While the two articles are fairly framework-specific, the code demonstrates how to prerender forms when working with them in a web application.

### Submit JavaScript-rendered forms with AJAX

To submit a JavaScript-rendered form built with a framework like Gatsby or Nuxt, you can send an AJAX POST request to any path on your site. Requirements for the request:

- You need to URL-encode your form data in the body of the request.
- If you haven't added a hidden `form-name` input to your JavaScript-rendered form, you need to send a `form-name` attribute in the AJAX POST request body.
- If the form accepts alphanumeric data only, the request should include the header `"Content-Type": "application/x-www-form-urlencoded"`. If the form accepts [file uploads](/manage/forms/setup#file-uploads), including a `Content-Type` header is not recommended.

Here's an AJAX form submission code sample using the `fetch` API for a JavaScript-rendered form. It uses Gatsby's `navigate` function to redirect to a custom page on form submission success.

```js
const handleSubmit = event => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => navigate("/thank-you/"))
    .catch(error => alert(error));
};
```

For a JavaScript-rendered form, you need to add a hidden `input` with `name="form-name"` to the returned form elements. Here's an example:

```jsx
return (
  <form
    data-netlify="true"
    name="pizzaOrder"
    method="post"
    onSubmit={handleSubmit}
  >
    <input type="hidden" name="form-name" value="pizzaOrder" />
    <label>
      What order did the pizza give to the pineapple?
      <input name="order" type="text" onChange={handleChange} />
    </label>
    <input type="submit" />
  </form>
);
```

In the code sample above, a `handleChange` function updates the form's state, which ultimately gets sent in a POST request to Netlify.

## Success messages

By default, when visitors complete a form, they are redirected to a page with a generically styled success message with a link back to the form page.

![Generic forms success message displayed.](/images/forms-default-generic-success-message.png)

### Custom success page

You can replace the default success page with a custom page you create by adding an `action` attribute to the `<form>` tag, entering the path of your custom page (like `"/pages/success"`) as the value. The path must be relative to the site root, starting with a `/`. Here's an example:

```html

```

If you submit your form using AJAX, reference this [Gatsby-specific example](#submit-javascript-rendered-forms-with-ajax) of how to set a custom success page.

### Custom success alert

If you use AJAX to submit the form, you can substitute an alert instead of redirecting to a generic or custom page. Here's an example for an HTML form:

```js
const handleSubmit = event => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => alert("Thank you for your submission"))
    .catch(error => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);
```

## File uploads

<p>
<noscript>
For information about interacting with uploaded files, visit the <a href="/manage/forms/submissions/">submissions page</a>.
</noscript>
</p>

Netlify Forms can receive files uploaded with form submissions. To do this, add an input with `type="file"` to any form. Although most browsers will detect the encoding automatically, you can optionally include `enctype="multipart/form-data"` in the `<form>` tag,

Here's a sample HTML form with a file upload field:

```html
<form name="fileForm" enctype="multipart/form-data" data-netlify="true">
  <p>
    <label>
      <span>Name:</span>
      <input name="name" type="text" />
    </label>
  </p>
  <p>
    <label>
      <span>Add file:</span>
      <input name="file" type="file" />
    </label>
  </p>
  <button>Submit</button>
</form>

```

### File upload security

Forms that accept file uploads that contain personally identifiable information (PII) require additional security configuration. We recommend using the [Very Good Security](https://www.netlify.com/integrations/very-good-security/) integration for this type of secure form upload.

### Limitations

Keep the following considerations in mind when working with file uploads in forms.

- Only one file upload per field is supported. For multiple file uploads, use multiple fields.
- The form request has a maximum size limit of 8 MB.
- File uploads time out after 30 seconds.

### Submit file uploads with AJAX

When submitting a form with a file upload, including a `Content-Type` header is not recommended. The browser should detect and set the `Content-Type` automatically.

Here's an AJAX form submission code sample using the `fetch` API for the above HTML form with file upload:

```js
document.forms.fileForm.addEventListener("submit", event => {
  event.preventDefault();
  const result = document.querySelector(".result");
  fetch("/", {
    body: new FormData(event.target),
    method: "POST"
  })
    .then(() => {
      result.innerText = "Success";
    })
    .catch(error => {
      result.innerText = `Failed: ${error}`;
    });
});
```

## Set up notifications

To monitor the content of your form submissions, you can set up notifications to send the content of the form submissions to an email address or to an external service with an HTTP POST request.

Learn more about [forms notifications](/manage/forms/notifications).

To set up notifications for your site's form submissions:

1. For your site go to 
### NavigationPath Component:

Configuration > Notifications > Form submission notifications
, and select **Add notification**.

## Review forms usage

For the last month (or billing period), you can review how many verified form submissions were made and the total storage size of all files uploaded.

1. For your site, go to 
### NavigationPath Component:

Forms > Usage and configuration > Usage
.

Learn more about [reviewing and managing forms usage](/manage/forms/usage-and-billing).

## More Forms resources

- [Spam filters](/manage/forms/spam-filters)
- [Form submissions](/manage/forms/submissions)
- [Form submission notifications](/manage/forms/notifications)
- [Form-triggered functions](/build/functions/trigger-on-events)
- [Troubleshooting tips](/manage/forms/troubleshooting-tips)
- [Forms usage and billing](/manage/forms/usage-and-billing)
