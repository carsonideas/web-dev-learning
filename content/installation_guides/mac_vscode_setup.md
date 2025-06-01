# Installation Guide for Mac and Visual Studio Code

This guide will walk you through setting up your development environment for web development on a Mac, including installing Visual Studio Code and configuring it for JavaScript and TypeScript development.

## Installing Node.js and npm

Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a browser. npm (Node Package Manager) comes bundled with Node.js and helps you install and manage packages.

### Step 1: Install Homebrew (if not already installed)

Homebrew is a package manager for macOS that makes it easy to install software. Open Terminal and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the prompts to complete the installation.

### Step 2: Install Node.js and npm using Homebrew

In Terminal, run:

```bash
brew install node
```

This command installs both Node.js and npm.

### Step 3: Verify the installation

Check that Node.js and npm are installed correctly:

```bash
node -v
npm -v
```

You should see version numbers for both Node.js and npm.

## Installing Visual Studio Code

Visual Studio Code (VS Code) is a lightweight but powerful source code editor that runs on your desktop.

### Step 1: Download VS Code

Visit the [Visual Studio Code website](https://code.visualstudio.com/) and click the download button for macOS.

### Step 2: Install VS Code

1. Open the downloaded `.zip` file
2. Drag Visual Studio Code.app to the Applications folder
3. Launch VS Code from your Applications folder

### Step 3: Install the VS Code command line tool

1. Open VS Code
2. Press `Cmd+Shift+P` to open the Command Palette
3. Type "shell command" and select "Shell Command: Install 'code' command in PATH"

Now you can open files or folders in VS Code from the terminal by typing `code filename` or `code .` (to open the current directory).

## Setting Up VS Code for Web Development

Let's install some essential extensions to enhance your web development experience in VS Code.

### Step 1: Open the Extensions view

Click on the Extensions icon in the Activity Bar on the side of VS Code or press `Cmd+Shift+X`.

### Step 2: Install recommended extensions

Search for and install these essential extensions:

1. **ESLint** - JavaScript linter that helps you find and fix problems in your code
   - Search: "ESLint"
   - Publisher: Microsoft

2. **Prettier - Code formatter** - Automatically formats your code
   - Search: "Prettier"
   - Publisher: Prettier

3. **Live Server** - Launch a local development server with live reload feature
   - Search: "Live Server"
   - Publisher: Ritwick Dey

4. **JavaScript (ES6) code snippets** - Code snippets for JavaScript
   - Search: "JavaScript (ES6) code snippets"
   - Publisher: charalampos karypidis

5. **HTML CSS Support** - CSS class name completion for HTML files
   - Search: "HTML CSS Support"
   - Publisher: ecmel

6. **Auto Rename Tag** - Automatically rename paired HTML tags
   - Search: "Auto Rename Tag"
   - Publisher: Jun Han

7. **Path Intellisense** - Autocompletes filenames
   - Search: "Path Intellisense"
   - Publisher: Christian Kohler

8. **GitLens** - Supercharges Git capabilities
   - Search: "GitLens"
   - Publisher: GitKraken

### Step 3: Configure VS Code settings

1. Open Settings by pressing `Cmd+,` or selecting "Code" > "Preferences" > "Settings"
2. Click on the {} icon in the top right to open the settings.json file
3. Add or update these settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Installing TypeScript

TypeScript is a superset of JavaScript that adds static types and other features.

### Step 1: Install TypeScript globally

In Terminal, run:

```bash
npm install -g typescript
```

### Step 2: Verify the installation

Check that TypeScript is installed correctly:

```bash
tsc -v
```

You should see the TypeScript version number.

### Step 3: Install TypeScript extension for VS Code

1. Open the Extensions view in VS Code
2. Search for "TypeScript"
3. Install the official TypeScript extension by Microsoft

## Creating Your First Project

Let's create a simple project structure to get started.

### Step 1: Create a project folder

In Terminal, run:

```bash
mkdir my-web-project
cd my-web-project
```

### Step 2: Initialize a new npm project

```bash
npm init -y
```

This creates a `package.json` file with default values.

### Step 3: Create basic project files

```bash
mkdir src
touch src/index.html src/styles.css src/script.js
```

### Step 4: Open the project in VS Code

```bash
code .
```

### Step 5: Add basic HTML structure

Open `src/index.html` and add:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Project</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first web project.</p>
  
  <script src="script.js"></script>
</body>
</html>
```

### Step 6: Add some CSS

Open `src/styles.css` and add:

```css
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  color: #333;
}

h1 {
  color: #0066cc;
}
```

### Step 7: Add some JavaScript

Open `src/script.js` and add:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello from JavaScript!');
});
```

### Step 8: Launch with Live Server

1. Right-click on `index.html` in VS Code
2. Select "Open with Live Server"
3. Your default browser should open with your page

## Setting Up a TypeScript Project

If you want to use TypeScript instead of JavaScript, follow these additional steps:

### Step 1: Initialize TypeScript configuration

In your project directory, run:

```bash
tsc --init
```

This creates a `tsconfig.json` file with default settings.

### Step 2: Update tsconfig.json

Open `tsconfig.json` and update it to:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Step 3: Create a TypeScript file

```bash
touch src/script.ts
```

### Step 4: Add TypeScript code

Open `src/script.ts` and add:

```typescript
document.addEventListener('DOMContentLoaded', (): void => {
  const greeting: string = 'Hello from TypeScript!';
  console.log(greeting);
  
  const header: HTMLElement | null = document.querySelector('h1');
  if (header) {
    header.addEventListener('click', (): void => {
      header.textContent = 'TypeScript is awesome!';
    });
  }
});
```

### Step 5: Compile TypeScript to JavaScript

In Terminal, run:

```bash
tsc
```

This will compile your TypeScript file to JavaScript in the `dist` directory.

### Step 6: Update your HTML to use the compiled JavaScript

Update `src/index.html` to:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My TypeScript Project</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first TypeScript project.</p>
  
  <script src="../dist/script.js"></script>
</body>
</html>
```

## Additional Tools and Resources

### Git Version Control

Install Git:

```bash
brew install git
```

Configure Git:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Browser Developer Tools

Modern browsers come with powerful developer tools:

- **Chrome DevTools**: Open with `Cmd+Option+I` or right-click and select "Inspect"
- **Firefox Developer Tools**: Open with `Cmd+Option+I` or right-click and select "Inspect Element"
- **Safari Web Inspector**: First, enable it in Safari > Preferences > Advanced > "Show Develop menu in menu bar", then open with `Cmd+Option+I`

### Useful VS Code Keyboard Shortcuts for Mac

- `Cmd+P`: Quick Open, Go to File
- `Cmd+Shift+P`: Command Palette
- `Cmd+F`: Find
- `Cmd+Shift+F`: Find in Files
- `Cmd+B`: Toggle Sidebar
- `Cmd+/`: Toggle Line Comment
- `Option+Shift+F`: Format Document
- `F12`: Go to Definition
- `Cmd+Shift+.`: Quick Fix
- `Cmd+Shift+E`: Explorer View
- `Cmd+Shift+D`: Debug View

## Troubleshooting Common Issues

### Node.js or npm command not found

If you get "command not found" errors after installing Node.js:

1. Check if Node.js is installed: `which node`
2. If it's not in your PATH, you may need to add it:
   ```bash
   echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   ```

### Permission errors with npm

If you get permission errors when installing packages globally:

```bash
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

### VS Code extensions not working

If extensions aren't working properly:

1. Try reloading VS Code: `Cmd+Shift+P` then type "Reload Window"
2. Check if the extension is enabled in the Extensions view
3. Check for conflicts between extensions

## Next Steps

Now that you have your development environment set up, you're ready to start building web applications! Here are some suggestions for what to do next:

1. Learn the basics of HTML, CSS, and JavaScript
2. Build simple projects to practice your skills
3. Learn a front-end framework like React, Vue, or Angular
4. Explore back-end development with Node.js
5. Learn about databases and how to connect them to your applications

Happy coding!
