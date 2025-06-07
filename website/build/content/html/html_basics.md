# HTML Basics

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements that tell the browser how to display the content.

## What is HTML?

HTML stands for HyperText Markup Language. It is the standard language used to create and design websites. HTML uses "markup" to annotate text, images, and other content for display in a web browser.

HTML provides the basic structure of sites, which is then enhanced and modified by other technologies like CSS and JavaScript:
- **HTML** provides the structure
- **CSS** controls the presentation and layout
- **JavaScript** adds interactivity and dynamic behavior

## HTML Tags and Their Anatomy

HTML elements are represented by tags. Tags are keywords surrounded by angle brackets `< >`.

### Basic Structure of an HTML Tag:

```html
<tagname>Content goes here...</tagname>
```

- The opening tag: `<tagname>`
- The content: `Content goes here...`
- The closing tag: `</tagname>`

Together, these three parts form an HTML element.

### Example:

```html
<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
```

### Self-closing Tags:

Some HTML elements don't have content and don't need a closing tag. These are called self-closing tags or void elements.

```html
<img src="image.jpg" alt="An image">
<br>
<hr>
<input type="text">
```

In HTML5, the trailing slash is optional for self-closing tags:

```html
<img src="image.jpg" alt="An image" />
<br />
```

### HTML Tag Attributes:

Attributes provide additional information about HTML elements:

```html
<tagname attribute="value">Content</tagname>
```

Common attributes include:
- `id`: Specifies a unique id for an element
- `class`: Specifies one or more class names for an element
- `style`: Specifies inline CSS style for an element
- `src`: Specifies the URL of the media file (used with `<img>`, `<audio>`, `<video>`, etc.)
- `href`: Specifies the URL of the page the link goes to (used with `<a>`)
- `alt`: Specifies an alternate text for an image (used with `<img>`)

Example:
```html
<a href="https://www.example.com" target="_blank" id="link1" class="external-link">Visit Example.com</a>
```

## Your First Simple Webpage

Let's create a simple HTML webpage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
    <p>I'm learning <strong>HTML</strong>!</p>
</body>
</html>
```

Save this code in a file with a `.html` extension (e.g., `index.html`), and open it in a web browser to see your first webpage!

## HTML Document Structure

Every HTML document follows a basic structure:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
    <!-- Meta information, CSS links, etc. -->
</head>
<body>
    <!-- Content visible to the user -->
</body>
</html>
```

Let's break down each part:

### 1. DOCTYPE Declaration

```html
<!DOCTYPE html>
```

The `<!DOCTYPE>` declaration helps the browser to display the webpage correctly. It must appear once, at the top of the page, before any HTML tags.

### 2. HTML Element

```html
<html lang="en">
...
</html>
```

The `<html>` element is the root element of an HTML page. The `lang` attribute specifies the language of the document.

### 3. Head Element

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <!-- Other meta information, CSS links, etc. -->
</head>
```

The `<head>` element contains meta information about the document:

- `<meta charset="UTF-8">`: Specifies the character encoding
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Makes the website responsive
- `<title>`: Specifies the title of the document (shown in the browser tab)
- You can also include CSS links, JavaScript links, and other meta tags

### 4. Body Element

```html
<body>
    <!-- Content visible to the user -->
</body>
```

The `<body>` element contains all the content that is visible to users, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

## Basic HTML Elements

Let's explore some of the most commonly used HTML elements:

### Headings

HTML provides six levels of headings, from `<h1>` (most important) to `<h6>` (least important):

```html
<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>
```

### Paragraphs

The `<p>` element defines a paragraph:

```html
<p>This is a paragraph. It can contain text, links, and other inline elements.</p>
<p>This is another paragraph.</p>
```

### Links

The `<a>` (anchor) element creates a hyperlink:

```html
<a href="https://www.example.com">Visit Example.com</a>
<a href="about.html">About Us</a>
<a href="mailto:info@example.com">Email Us</a>
<a href="tel:+1234567890">Call Us</a>
```

Attributes commonly used with links:
- `href`: The URL the link points to
- `target="_blank"`: Opens the link in a new tab/window
- `title`: Provides additional information about the link (shown as a tooltip)

### Images

The `<img>` element embeds an image:

```html
<img src="image.jpg" alt="Description of the image">
```

Attributes:
- `src`: The path to the image file
- `alt`: Alternative text for the image (for accessibility and SEO)
- `width` and `height`: Specify the dimensions of the image
- `loading="lazy"`: Enables lazy loading for better performance

### Lists

HTML provides three types of lists:

1. **Unordered Lists** (`<ul>`): A list of items with bullet points

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

2. **Ordered Lists** (`<ol>`): A numbered list of items

```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

3. **Description Lists** (`<dl>`): A list of terms and their descriptions

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```

### Divs and Spans

`<div>` and `<span>` are container elements used for styling and grouping:

- `<div>`: A block-level container for grouping elements
- `<span>`: An inline container for text and other inline elements

```html
<div class="container">
    <p>This paragraph is inside a div. <span class="highlight">This text is highlighted.</span></p>
</div>
```

### Comments

HTML comments are not displayed in the browser but can help document your code:

```html
<!-- This is a comment -->
<!-- 
    This is a 
    multi-line comment 
-->
```

## Nesting HTML Elements

HTML elements can be nested (placed inside other elements):

```html
<div class="container">
    <h2>Article Title</h2>
    <p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
    <p>Visit our <a href="contact.html">contact page</a> for more information.</p>
</div>
```

Proper nesting is important. Elements should be closed in the reverse order they were opened:

```html
<!-- Correct nesting -->
<p>This is <strong>very <em>important</em></strong> text.</p>

<!-- Incorrect nesting -->
<p>This is <strong>very <em>important</strong></em> text.</p>
```

## HTML Formatting Elements

HTML provides several elements for formatting text:

```html
<strong>Bold text</strong> or <b>Bold text</b>
<em>Italic text</em> or <i>Italic text</i>
<u>Underlined text</u>
<mark>Highlighted text</mark>
<small>Smaller text</small>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript</sub> and <sup>Superscript</sup>
<code>Computer code</code>
<pre>Preformatted text</pre>
<blockquote>Quoted text</blockquote>
<q>Inline quote</q>
<abbr title="HyperText Markup Language">HTML</abbr>
```

## Try It Yourself

Here's a simple exercise to practice HTML:

1. Create a new file named `index.html`
2. Copy and paste the following HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
</head>
<body>
    <!-- Add your content here -->
    
</body>
</html>
```

3. Inside the `<body>` tags, add:
   - A main heading with your name
   - A paragraph about yourself
   - An unordered list of your hobbies
   - A link to your favorite website
   - An image (you can use a placeholder like `https://via.placeholder.com/150`)

4. Save the file and open it in a web browser to see your webpage!

## Summary

In this section, we've covered:
- What HTML is and its purpose
- The anatomy of HTML tags
- Basic HTML document structure
- Common HTML elements and their usage
- How to nest HTML elements properly
- Text formatting elements

In the next sections, we'll explore more HTML elements and learn how to create more complex structures like tables and forms.
