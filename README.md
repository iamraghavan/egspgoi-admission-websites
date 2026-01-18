# EGS Admissions Hub

This is a Next.js application for the EGS Pillay Group of Institutions, designed to provide a comprehensive portal for admissions, program information, and campus life.

## Key Features

- **Dynamic Admissions Form**: A comprehensive form for prospective students to apply, secured with Google reCAPTCHA.
- **AI-Generated Testimonials**: A `genkit` flow that dynamically creates authentic-sounding student testimonials.
- **Program Finder**: An interactive section for users to search and filter through academic programs.
- **Google Analytics (GA4) Integration**: Built-in tracking for page views and key conversion events like form submissions and navigation clicks.
- **Responsive Design**: A mobile-first approach ensuring a seamless experience across all devices.
- **Modern UI**: Built with ShadCN/UI and Tailwind CSS for a clean and modern aesthetic.

## Tech Stack

This project is built with a modern, robust, and scalable technology stack:

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
-   **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit)
-   **Backend & DB**: [Firebase](https://firebase.google.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Installation

1.  **Clone the repository**

2.  **Install the dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**

    Create a `.env` file in the root of the project and add the necessary environment variables. See the [Environment Variables](#environment-variables) section below.

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Your site key from the Google reCAPTCHA admin console.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Measurement ID from Google Analytics (GA4).

Example `.env` file:
```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Deployment

This application is configured for deployment on **Firebase App Hosting**. The configuration can be found in the `apphosting.yaml` file.

## Author

-   **Raghavan**
