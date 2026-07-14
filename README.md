# Saru | Personal Portfolio

A modern, responsive, and dynamic personal portfolio website built to showcase my skills, projects, and educational journey as a frontend developer.

## Features

- **Dark & Light Mode Toggle:** Seamlessly switch between themes.
- **Glassmorphism Design:** Modern translucent UI elements with smooth drop shadows.
- **Micro-Animations:** Powered by Framer Motion for a fluid user experience.
- **Custom Cursor & Scroll Progress:** Professional touches to enhance interactivity.
- **Project Deep Dives:** Interactive modals explaining the problem, tech stack, and features of upcoming projects.
- **Fully Responsive:** Optimized for Mobile, Tablet, and Desktop views.

## Tech Stack

- **React.js** (Vite)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **Vanilla CSS3** (Custom Properties, Flexbox, Grid)

## How to Run This Project Locally

Follow these detailed step-by-step instructions to get the portfolio running on your local machine. No prior coding experience required!

### Prerequisites

Before you begin, make sure you have the following installed on your computer:

#### 1. Node.js (Required)
- **Download:** Visit [https://nodejs.org/](https://nodejs.org/) and download the **LTS (Long Term Support)** version
- **Installation:** Run the downloaded installer and follow the setup wizard
- **Verification:** Open Command Prompt/Terminal and run:
  ```bash
  node --version
  ```
  You should see a version number like `v18.17.0` or similar.

#### 2. npm (Comes with Node.js)
- **Verification:** In the same Command Prompt/Terminal, run:
  ```bash
  npm --version
  ```
  You should see a version number like `9.6.7` or similar.

#### 3. Git (Optional, for cloning)
- **Download:** Visit [https://git-scm.com/](https://git-scm.com/) and download Git
- **Installation:** Run the installer and use default settings
- **Verification:** Open Command Prompt/Terminal and run:
  ```bash
  git --version
  ```

### Step-by-Step Setup Guide

#### Step 1: Get the Project Files
**Option A: Clone with Git (Recommended)**
1. Open Command Prompt/Terminal
2. Navigate to where you want to store the project (e.g., Desktop):
   ```bash
   cd Desktop
   ```
3. Clone the repository:
   ```bash
   git clone <your-github-repo-url>
   ```
4. Enter the project folder:
   ```bash
   cd Portfolio
   ```

**Option B: Download ZIP File**
1. Go to the GitHub repository page
2. Click the green **"Code"** button
3. Select **"Download ZIP"**
4. Extract the ZIP file to your desired location
5. Open Command Prompt/Terminal and navigate to the extracted folder:
   ```bash
   cd path/to/extracted/Portfolio
   ```

#### Step 2: Install Project Dependencies
1. Make sure you're in the project folder (you should see `package.json` when you run `dir` or `ls`)
2. Install all required packages:
   ```bash
   npm install
   ```
3. Wait for the installation to complete. This may take 2-5 minutes.
4. You should see messages like "Successfully installed" when it's done.

#### Step 3: Start the Development Server
1. In the same terminal/command prompt, run:
   ```bash
   npm run dev
   ```
2. Wait for the server to start. You'll see messages like:
   ```
   VITE v8.0.10  ready in 1234 ms
   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ➜  press h + enter to show help
   ```

#### Step 4: View Your Portfolio
1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Go to the URL shown in the terminal: `http://localhost:5173/`
3. You should now see your portfolio website!

### What You'll See
- A modern portfolio with dark/light mode toggle
- Sections for About, Education, Skills, and Projects
- Interactive animations and glassmorphism effects
- Responsive design that works on mobile and desktop

### How to Stop the Server
- In the terminal/command prompt, press `Ctrl + C` (hold Ctrl and press C)
- The server will stop and you'll return to the command prompt

### Troubleshooting

#### "npm command not found" or "npm is not recognized"
- Make sure Node.js is properly installed
- Try restarting your Command Prompt/Terminal
- On Windows, you might need to restart your computer

#### "Permission denied" or "Access denied" errors
- On Windows: Try running Command Prompt as Administrator
- On macOS/Linux: You might need to use `sudo` before commands (not recommended for npm)

#### Port 5173 is already in use
- The server will automatically try another port (like 5174)
- Or manually specify a different port:
  ```bash
  npm run dev -- --port 3000
  ```

#### "npm install" fails or hangs
- Check your internet connection
- Try clearing npm cache: `npm cache clean --force`
- Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

#### Website doesn't load or shows errors
- Make sure the server is running (you should see "ready" in terminal)
- Try refreshing the browser (Ctrl+F5 or Cmd+Shift+R)
- Check if another application is using port 5173

#### Files not found or missing dependencies
- Make sure you're in the correct project folder
- Verify all files are present (check for `package.json`, `src/`, etc.)
- Try running `npm install` again

### Development Commands

Once set up, you can use these commands:

- `npm run dev` - Start development server (what you just did!)
- `npm run build` - Create production build for deployment
- `npm run preview` - Preview the production build locally
- `npm run lint` - Check code for errors and style issues

### Need Help?
If you encounter issues not covered here:
1. Check the terminal/command prompt for error messages
2. Google the specific error message
3. Make sure all prerequisites are correctly installed
4. Try the troubleshooting steps above

The project should work on Windows, macOS, and Linux with the steps above!

## Deployment

To deploy this project to the internet for free, you can use services like **Vercel** or **Netlify**.
1. Push this code to a GitHub repository.
2. Sign in to Vercel/Netlify with your GitHub account.
3. Import the repository and click "Deploy" (The build command `npm run build` will be detected automatically).
