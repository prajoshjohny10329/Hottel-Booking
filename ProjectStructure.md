/your-project-root
│
├── /public               # Static assets like images, favicon, etc.
│
├── /src
│   ├── /app             # Next.js application folder
│   │   ├── /components   # Shared components like Header, Footer, etc.
│   │   │   ├── /Header
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.module.css
│   │   │   ├── /Signup
│   │   │   │   ├── Signup.tsx
│   │   │   │   ├── Signup.module.css
│   │   ├── /context      # Context for user state management
│   │   │   ├── UserContext.tsx
│   │   ├── /pages        # Next.js pages
│   │   │   ├── api       # API routes
│   │   │   │   ├── /auth
│   │   │   │   │   ├── login.ts
│   │   │   │   │   ├── signup.ts
│   │   │   ├── index.tsx # Home page
│   │   │   ├── signup.tsx # Signup page
│   │   ├── /styles       # Global styles
│   │   │   ├── globals.css
│   │   └── /utils        # Utility functions
│   │       ├── api.ts    # API helper functions
│   │       ├── auth.ts   # Auth-related utility functions
│   │
│   ├── /styles           # CSS modules or global styles
│   ├── /models           # Mongoose models
│   │   ├── User.ts       # User model
│   ├── /config           # Configuration files (e.g., database connection)
│   └── /lib              # Libraries or helpers (e.g., middleware)
│
├── .env                  # Environment variables
├── .gitignore            # Git ignore file
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript configuration (if using TypeScript)
