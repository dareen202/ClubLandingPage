# NU.CODE - Nile University Coding Club

A modern, responsive landing page built for the Nile University student developer community. This project focuses on clean UI/UX and component-based architecture.

---

## Project Idea
The **NU.CODE Landing Page** is a digital hub for student developers at Nile University. The goal is to provide a central location where students can explore different technical tracks, learn about the club's mission, and join the community. It is built using **React** for functionality and **Tailwind CSS** for rapid, modern styling.

<img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/e795cfdc-3ccf-4cc9-8540-c594bb95a2f0" />

---

## Project Structure
```text
task3/
├── src/
│   ├── components/       # Reusable UI building blocks
│   │   ├── Navbar.tsx    # Responsive navigation & branding
│   │   ├── Hero.tsx      # High-impact welcome section
│   │   ├── Card.tsx      # Reusable track information cards
│   │   └── Footer.tsx    # Multi-column site information
│   ├── App.tsx           # Main page assembly & layout
│   ├── main.tsx          # Entry point & global style injection
│   └── index.css         # Tailwind CSS directives
├── tailwind.config.js    # Design system configuration
└── package.json          # Project dependencies & scripts
```
## Components Used
- Navbar: A sticky header with responsive navigation links (to be updated).
- Hero: An introductory section with a Call-to-Action and subtext.
- Card (Reusable): A flexible component used multiple times to display the Competitive Programming, Mobile Dev, and Web Dev tracks.
- Footer: A dark-themed section organized into grids.

## How to Run
1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies (run: npm install)
4. Launch the development server (run: npm run dev)
5. View the project (open the local URL provided in your terminal)
