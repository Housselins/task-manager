## Install Front

First, install the development server:

```bash
npm install
# or
yarn install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Login
The system will be able to log in user in two ways, Google's auth API and Local project DB and API

1. Firebase authentication configuration
Create a .env file in the root (/task-manager-front) and the add this vars to your .env file

```bash
GOOGLE_CLIENT_ID=487793401549-ibakkrhr4lvlfuikdmohp4n75o4mq2i2.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
```

those are QA vars for Google's Oauth2.0
this will work for next-auth library using Google's auth provider