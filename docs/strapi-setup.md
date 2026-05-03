# Strapi CMS Integration & Configuration Guide

This guide explains how to set up a Strapi CMS server and connect it to your current EGS Pillay Admissions website.

## 1. Initial Strapi Setup

Since your project is built with Next.js, we recommend running Strapi in a separate directory or on a separate server to keep the frontend "distruption-free".

### Local Installation
1.  Open a terminal and navigate outside your Next.js project.
2.  Run the installation command:
    ```bash
    npx create-strapi-app@latest egsp-cms --quickstart
    ```
3.  Once the installation finishes, the Strapi admin panel will open in your browser (usually at `http://localhost:1337/admin`).
4.  Create your admin account.

## 2. Configure MySQL Database

If you want to use MySQL instead of the default SQLite:

1.  During installation, choose **"Custom (manual settings)"** instead of quickstart.
2.  Select **"mysql"** as your database.
3.  Provide your MySQL credentials (Host, Port, Database Name, Username, Password).

## 3. Creating Content Types

In the Strapi Admin Panel:
1.  Go to **Content-Type Builder**.
2.  Create a new Collection Type named `Lead`.
3.  Add the following fields (matching your Admission Form):
    - `name` (Short Text)
    - `email` (Email)
    - `phone` (Short Text)
    - `college` (Enumeration)
    - `course` (Short Text)
    - `state` (Short Text)
    - `district` (Short Text)
    - `admission_year` (Short Text)
4.  Click **Save**.

## 4. API Permissions

1.  Go to **Settings > Users & Permissions Plugin > Roles**.
2.  Click on **Public** (or create a new role with an API Token).
3.  Under `Lead`, check the boxes for `create` (to allow form submissions) and `find` (if you want to list them).
4.  Click **Save**.

## 5. Connecting Next.js to Strapi

I have already added `src/lib/strapi.ts` to your project. To use it:

1.  **Environment Variables:** Add these to your `.env` file:
    ```env
    NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
    STRAPI_API_TOKEN=your_generated_token_here
    ```

2.  **Updating Server Actions:** 
    You can update `src/app/actions/submit-lead.ts` to send data to Strapi:

    ```typescript
    import { fetchStrapi } from '@/lib/strapi';

    export async function submitToStrapi(payload: any) {
      return await fetchStrapi('/leads', {
        method: 'POST',
        body: JSON.stringify({ data: payload }),
      });
    }
    ```

## 6. Deployment
- **Frontend:** Keep deploying your Next.js app to Vercel/Firebase.
- **Backend:** Deploy Strapi to a platform like Heroku, DigitalOcean, or Strapi Cloud. 
- Update the `NEXT_PUBLIC_STRAPI_URL` in your production environment variables to point to your live Strapi URL.
