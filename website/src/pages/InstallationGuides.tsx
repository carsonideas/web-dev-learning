import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Highlight, themes } from 'prism-react-renderer';

const InstallationGuides: React.FC = () => {
  const macVSCodeContent = `# Installation Guide for Mac and Visual Studio Code

## Setting Up Your Development Environment

This guide will walk you through setting up a complete web development environment on your Mac, including:

1. Installing Node.js and npm
2. Setting up Visual Studio Code
3. Installing essential VS Code extensions
4. Configuring your terminal
5. Setting up Git

## 1. Installing Node.js and npm

Node.js is a JavaScript runtime that allows you to run JavaScript on your computer outside of a browser. npm (Node Package Manager) comes bundled with Node.js and helps you install and manage packages.

### Using Homebrew (Recommended)

1. **Install Homebrew** (if not already installed):
   Open Terminal and run:
   \`\`\`bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   \`\`\`

2. **Install Node.js and npm**:
   \`\`\`bash
   brew install node
   \`\`\`

3. **Verify installation**:
   \`\`\`bash
   node -v
   npm -v
   \`\`\`
   You should see version numbers for both.

### Using the Official Installer

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the instructions
4. Verify installation using the commands above

## 2. Setting up Visual Studio Code

Visual Studio Code (VS Code) is a lightweight but powerful code editor with excellent support for JavaScript, TypeScript, and web development.

1. **Download VS Code**:
   - Visit [code.visualstudio.com](https://code.visualstudio.com/)
   - Click the download button for macOS
   - Open the downloaded file and drag Visual Studio Code to your Applications folder

2. **Launch VS Code**:
   - Open VS Code from your Applications folder
   - Optionally, add VS Code to your Dock by right-clicking its icon and selecting "Keep in Dock"

3. **Enable launching from the command line**:
   - Open VS Code
   - Press \`Cmd+Shift+P\` to open the command palette
   - Type "shell command" and select "Shell Command: Install 'code' command in PATH"
   - Now you can open files or folders in VS Code from the terminal using \`code filename\` or \`code .\`

## 3. Essential VS Code Extensions for Web Development

VS Code becomes even more powerful with extensions. Here are some essential ones for web development:

1. **Open VS Code Extensions**:
   - Click the Extensions icon in the Activity Bar on the side of the window or press \`Cmd+Shift+X\`

2. **Install these recommended extensions**:

   - **ESLint**: JavaScript linting
     \`\`\`
     ext install dbaeumer.vscode-eslint
     \`\`\`

   - **Prettier - Code formatter**: Automatic code formatting
     \`\`\`
     ext install esbenp.prettier-vscode
     \`\`\`

   - **Live Server**: Launch a local development server with live reload
     \`\`\`
     ext install ritwickdey.LiveServer
     \`\`\`

   - **JavaScript (ES6) code snippets**: Snippets for JavaScript
     \`\`\`
     ext install xabikos.JavaScriptSnippets
     \`\`\`

   - **HTML CSS Support**: CSS intellisense for HTML
     \`\`\`
     ext install ecmel.vscode-html-css
     \`\`\`

   - **Auto Rename Tag**: Automatically rename paired HTML tags
     \`\`\`
     ext install formulahendry.auto-rename-tag
     \`\`\`

   - **Path Intellisense**: Autocompletes filenames
     \`\`\`
     ext install christian-kohler.path-intellisense
     \`\`\`

   - **GitLens**: Enhanced Git capabilities
     \`\`\`
     ext install eamodio.gitlens
     \`\`\`

   - **Color Highlight**: Highlights web colors in your editor
     \`\`\`
     ext install naumovs.color-highlight
     \`\`\`

   - **Thunder Client**: REST API client for testing
     \`\`\`
     ext install rangav.vscode-thunder-client
     \`\`\`

## 4. Configuring Your Terminal

The Terminal app on macOS is great, but you can enhance it for development:

### Option 1: Use the built-in Terminal with Zsh

macOS now uses Zsh as the default shell. You can customize it:

1. **Create or edit your Zsh configuration**:
   \`\`\`bash
   touch ~/.zshrc
   open -e ~/.zshrc
   \`\`\`

2. **Add useful aliases** (optional):
   \`\`\`bash
   # Useful aliases
   alias ll="ls -la"
   alias gs="git status"
   alias gc="git commit"
   alias gp="git push"
   alias nrd="npm run dev"
   \`\`\`

### Option 2: Install iTerm2 (Enhanced Terminal)

1. **Install iTerm2**:
   \`\`\`bash
   brew install --cask iterm2
   \`\`\`

2. **Install Oh My Zsh** for enhanced features:
   \`\`\`bash
   sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
   \`\`\`

## 5. Setting up Git

Git is essential for version control and collaboration:

1. **Install Git** (if not already installed):
   \`\`\`bash
   brew install git
   \`\`\`

2. **Configure Git**:
   \`\`\`bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   \`\`\`

3. **Set up SSH for GitHub** (recommended):
   - Generate an SSH key:
     \`\`\`bash
     ssh-keygen -t ed25519 -C "your.email@example.com"
     \`\`\`
   - Start the SSH agent:
     \`\`\`bash
     eval "$(ssh-agent -s)"
     \`\`\`
   - Add your SSH key to the agent:
     \`\`\`bash
     ssh-add -K ~/.ssh/id_ed25519
     \`\`\`
   - Copy your public key:
     \`\`\`bash
     pbcopy < ~/.ssh/id_ed25519.pub
     \`\`\`
   - Add the key to your GitHub account (in GitHub settings)

## 6. Setting Up for JavaScript and TypeScript Development

### Install TypeScript

\`\`\`bash
npm install -g typescript
\`\`\`

Verify installation:
\`\`\`bash
tsc --version
\`\`\`

### Create a React Project

To create a new React project with TypeScript:

\`\`\`bash
npx create-react-app my-app --template typescript
cd my-app
npm start
\`\`\`

## 7. VS Code Settings for Web Development

Create optimal settings for web development:

1. Open VS Code settings (Cmd+,)
2. Click on the {} icon to edit settings.json
3. Add these recommended settings:

\`\`\`json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.rulers": [80, 120],
  "editor.wordWrap": "on",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.autoSave": "onFocusChange",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "terminal.integrated.fontFamily": "Menlo, Monaco, 'Courier New', monospace",
  "workbench.colorTheme": "Default Dark+",
  "workbench.iconTheme": "material-icon-theme"
}
\`\`\`

## 8. Browser Developer Tools

For web development, you'll need to become familiar with browser developer tools:

1. **Chrome DevTools**:
   - Install Google Chrome if not already installed
   - Open DevTools with Cmd+Option+I or right-click and select "Inspect"
   - Learn to use the Elements, Console, Network, and Application tabs

2. **Firefox Developer Edition** (optional but recommended):
   - Install [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
   - It has excellent CSS and responsive design tools

## 9. Testing Your Setup

Let's create a simple project to test your setup:

1. **Create a new project folder**:
   \`\`\`bash
   mkdir test-project
   cd test-project
   code .
   \`\`\`

2. **Create an HTML file**:
   Create index.html with this content:
   \`\`\`html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Test Project</title>
     <link rel="stylesheet" href="styles.css">
   </head>
   <body>
     <h1>Hello, Web Development!</h1>
     <p>If you can see this, your setup is working.</p>
     <button id="testButton">Click Me</button>
     
     <script src="script.js"></script>
   </body>
   </html>
   \`\`\`

3. **Create a CSS file**:
   Create styles.css:
   \`\`\`css
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     line-height: 1.6;
     color: #333;
     max-width: 800px;
     margin: 0 auto;
     padding: 20px;
   }
   
   h1 {
     color: #0066cc;
   }
   
   button {
     background-color: #0066cc;
     color: white;
     border: none;
     padding: 10px 15px;
     border-radius: 4px;
     cursor: pointer;
     transition: background-color 0.3s;
   }
   
   button:hover {
     background-color: #0052a3;
   }
   \`\`\`

4. **Create a JavaScript file**:
   Create script.js:
   \`\`\`javascript
   document.addEventListener('DOMContentLoaded', () => {
     const button = document.getElementById('testButton');
     
     button.addEventListener('click', () => {
       alert('Your JavaScript is working!');
     });
   });
   \`\`\`

5. **Run the project**:
   - Right-click on index.html in VS Code
   - Select "Open with Live Server"
   - Your default browser should open with your page
   - Click the button to test JavaScript functionality

## Troubleshooting Common Issues

### Node.js or npm issues:
- **Error**: "command not found: npm"
  - **Solution**: Make sure Node.js is installed correctly. Try reinstalling using Homebrew.

### VS Code issues:
- **Error**: "code command not found"
  - **Solution**: Reinstall the 'code' command from VS Code using the Command Palette.

### Git issues:
- **Error**: "Permission denied (publickey)" when pushing to GitHub
  - **Solution**: Make sure your SSH key is added to your GitHub account and the SSH agent is running.

### Extension issues:
- **Problem**: Extensions not working
  - **Solution**: Try disabling and re-enabling the extension, or uninstall and reinstall it.

## Next Steps

Now that your development environment is set up, you're ready to start learning and building web applications! Here are some recommended next steps:

1. **Learn HTML fundamentals**
2. **Master CSS styling**
3. **Explore JavaScript basics**
4. **Try TypeScript for type safety**
5. **Build simple projects to practice your skills**

Remember, the best way to learn is by doing. Start with small projects and gradually increase complexity as you become more comfortable.

Happy coding!`;

  // Custom renderer for code blocks to add syntax highlighting
  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <Highlight
          theme={themes.nightOwl}
          code={String(children).replace(/\n$/, '')}
          language={match[1]}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className="code-block" style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Installation and Setup Guides</h1>
        <p className="text-light-text/80">Get your development environment ready for web development</p>
      </div>

      <div className="bg-dark-card rounded-lg p-6">
        <div className="flex items-center mb-6">
          <img src="/assets/images/dashboard_preview.png" alt="Mac and VS Code" className="w-16 h-16 mr-4" />
          <h2 className="text-2xl font-bold">Mac and Visual Studio Code Setup</h2>
        </div>

        <div className="markdown-content">
          <ReactMarkdown components={components}>{macVSCodeContent}</ReactMarkdown>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Need Help?</h3>
        <p className="mb-4">
          If you encounter any issues during installation or setup, check out these resources:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><a href="https://nodejs.org/en/docs/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Node.js Documentation</a></li>
          <li><a href="https://code.visualstudio.com/docs" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">VS Code Documentation</a></li>
          <li><a href="https://git-scm.com/doc" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Git Documentation</a></li>
        </ul>
      </div>
    </div>
  );
};

export default InstallationGuides;
