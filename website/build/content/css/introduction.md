# Introduction to CSS

CSS (Cascading Style Sheets) is a stylesheet language used to control the visual presentation of HTML documents. It allows you to define how elements should be displayed on a webpage, including their layout, colors, fonts, and animations.

## What is CSS?

CSS stands for Cascading Style Sheets. It's the language that brings style to the web, transforming plain HTML documents into visually appealing websites. While HTML provides the structure and content of a webpage, CSS controls how that content looks and is laid out.

With CSS, you can:
- Change colors, fonts, and text sizes
- Create layouts with multiple columns
- Add animations and transitions
- Implement responsive designs that work on different screen sizes
- Customize the appearance of specific elements
- And much more!

## Why CSS is Important

CSS is crucial for modern web development for several reasons:

1. **Separation of Concerns**: CSS allows you to separate content (HTML) from presentation (CSS), making your code more maintainable and easier to update.

2. **Consistency**: With CSS, you can define styles once and apply them across multiple pages, ensuring a consistent look throughout your website.

3. **Efficiency**: Without having to repeat style information within each HTML element, your pages load faster and require less bandwidth.

4. **Accessibility**: Proper CSS implementation can improve the accessibility of your website for users with disabilities.

5. **Responsive Design**: CSS enables you to create websites that adapt to different screen sizes and devices.

6. **User Experience**: Well-designed CSS enhances the user experience by making content more readable and navigation more intuitive.

## CSS Syntax

CSS has a simple syntax consisting of selectors and declarations:

```css
selector {
  property: value;
  property: value;
  /* More properties and values */
}
```

- **Selector**: Targets the HTML element(s) you want to style
- **Property**: The aspect of the element you want to change (e.g., color, font-size)
- **Value**: The specific setting you want to apply to the property
- **Declaration**: A property-value pair (e.g., `color: blue;`)
- **Declaration Block**: All declarations for a selector, enclosed in curly braces `{}`

### Example:

```css
p {
  color: blue;
  font-size: 16px;
  line-height: 1.5;
}
```

This CSS rule:
- Targets all paragraph (`<p>`) elements
- Sets their text color to blue
- Sets their font size to 16 pixels
- Sets their line height to 1.5 times the font size

## Adding CSS to HTML

There are three ways to include CSS in your HTML documents:

### 1. Inline CSS

Inline CSS is applied directly to individual HTML elements using the `style` attribute:

```html
<p style="color: blue; font-size: 16px;">This is a blue paragraph with 16px font size.</p>
```

**Pros:**
- Immediately see which styles apply to an element
- No need for external files
- Useful for quick testing or one-off styles

**Cons:**
- Mixes content with presentation
- Cannot be reused across multiple elements
- Hard to maintain for larger projects
- Overrides external and internal styles (highest specificity)

### 2. Internal CSS

Internal CSS is placed within a `<style>` element in the `<head>` section of an HTML document:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
    
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <p>This is a blue paragraph.</p>
  <p class="highlight">This is a blue paragraph with yellow background.</p>
</body>
</html>
```

**Pros:**
- Styles are contained in one HTML file
- Can use selectors to style multiple elements
- No additional HTTP requests

**Cons:**
- Styles only apply to that specific HTML page
- Increases the size of the HTML document
- Cannot be cached separately from the HTML

### 3. External CSS

External CSS involves creating a separate `.css` file and linking it to your HTML document using the `<link>` element:

**HTML file (index.html):**
```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>This is a blue paragraph.</p>
  <p class="highlight">This is a blue paragraph with yellow background.</p>
</body>
</html>
```

**CSS file (styles.css):**
```css
p {
  color: blue;
  font-size: 16px;
}

.highlight {
  background-color: yellow;
}
```

**Pros:**
- Separates content (HTML) from presentation (CSS)
- One CSS file can be used across multiple HTML pages
- Browsers can cache the CSS file
- Easier to maintain and collaborate on
- Reduces HTML file size

**Cons:**
- Requires an additional HTTP request (though this is mitigated with HTTP/2)
- Slightly more complex setup for beginners

## CSS Selectors

Selectors are patterns used to select and style HTML elements. Here are the most common types:

### Element Selector

Selects all elements of a specified type:

```css
p {
  color: blue;
}
```

This selects all `<p>` elements and makes their text blue.

### Class Selector

Selects elements with a specific class attribute:

```css
.highlight {
  background-color: yellow;
}
```

This selects all elements with `class="highlight"` and gives them a yellow background.

In HTML, you can apply this class like this:
```html
<p class="highlight">This text has a yellow background.</p>
```

### ID Selector

Selects an element with a specific id attribute:

```css
#header {
  background-color: black;
  color: white;
}
```

This selects the element with `id="header"` and applies the styles.

In HTML, you would use:
```html
<div id="header">This is the header.</div>
```

**Note**: IDs must be unique within a page, while classes can be used multiple times.

### Attribute Selector

Selects elements based on their attributes:

```css
input[type="text"] {
  border: 1px solid gray;
}

a[href^="https"] {
  color: green;
}
```

The first rule selects all `<input>` elements with `type="text"`.
The second rule selects all `<a>` elements whose `href` attribute starts with "https".

### Descendant Selector

Selects elements that are descendants of another element:

```css
article p {
  font-style: italic;
}
```

This selects all `<p>` elements that are inside an `<article>` element.

### Child Selector

Selects elements that are direct children of another element:

```css
ul > li {
  list-style-type: square;
}
```

This selects all `<li>` elements that are direct children of a `<ul>` element.

### Pseudo-class Selector

Selects elements based on a certain state:

```css
a:hover {
  text-decoration: underline;
}

li:first-child {
  font-weight: bold;
}
```

The first rule applies styles when the user hovers over a link.
The second rule selects the first `<li>` element within its parent.

## CSS Colors

CSS provides several ways to specify colors:

### Named Colors

CSS has 140+ named colors:

```css
h1 {
  color: red;
}

p {
  color: steelblue;
}
```

### Hexadecimal Colors

Six-digit codes representing RGB values:

```css
h1 {
  color: #ff0000; /* Red */
}

p {
  color: #4682b4; /* Steel Blue */
}
```

Shorthand for certain hex colors:

```css
h1 {
  color: #f00; /* Same as #ff0000 */
}
```

### RGB and RGBA Colors

RGB stands for Red, Green, Blue:

```css
h1 {
  color: rgb(255, 0, 0); /* Red */
}

/* With alpha (transparency) */
p {
  color: rgba(70, 130, 180, 0.5); /* Semi-transparent Steel Blue */
}
```

The alpha value ranges from 0 (completely transparent) to 1 (completely opaque).

### HSL and HSLA Colors

HSL stands for Hue, Saturation, Lightness:

```css
h1 {
  color: hsl(0, 100%, 50%); /* Red */
}

/* With alpha (transparency) */
p {
  color: hsla(207, 44%, 49%, 0.5); /* Semi-transparent Steel Blue */
}
```

## CSS Units

CSS uses various units for expressing lengths:

### Absolute Units

- `px` (pixels): 1px is 1/96th of an inch
- `pt` (points): 1pt is 1/72nd of an inch
- `in` (inches)
- `cm` (centimeters)
- `mm` (millimeters)

```css
h1 {
  font-size: 24px;
}

p {
  margin-bottom: 0.5in;
}
```

### Relative Units

- `em`: Relative to the font-size of the element
- `rem`: Relative to the font-size of the root element
- `%`: Relative to the parent element
- `vw`: 1% of viewport width
- `vh`: 1% of viewport height

```css
body {
  font-size: 16px;
}

h1 {
  font-size: 2em; /* 32px (2 times the parent's font size) */
}

.container {
  width: 80%; /* 80% of parent's width */
  height: 50vh; /* 50% of viewport height */
}
```

## Try It Yourself

Here's a simple exercise to practice CSS:

1. Create an HTML file with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Practice</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header id="main-header">
    <h1>My Styled Page</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  
  <main>
    <article>
      <h2>Welcome to CSS</h2>
      <p>This is a paragraph with <span class="highlight">highlighted text</span>.</p>
      <p>CSS makes web pages look beautiful!</p>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2025 My Website</p>
  </footer>
</body>
</html>
```

2. Create a CSS file named `styles.css` and try to:
   - Set a background color for the body
   - Style the header with a different background color and centered text
   - Make the navigation links display horizontally instead of vertically
   - Change the color of the links and remove the underline
   - Add a hover effect to the links
   - Style the highlighted text with a different color or background
   - Add some margin and padding to elements to improve spacing

3. Experiment with different selectors, colors, and properties to see how they affect the page.

## Summary

In this introduction to CSS, we've covered:
- What CSS is and why it's important
- CSS syntax and how it works
- Three ways to add CSS to HTML
- Basic CSS selectors
- Color values in CSS
- Common CSS units

In the next sections, we'll dive deeper into CSS properties, layouts, and advanced techniques to create beautiful and responsive web designs.
