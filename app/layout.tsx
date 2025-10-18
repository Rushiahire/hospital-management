import "@/styles/globals.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" title="Hospital Management">
      <Head>
        <title>Hospital Management - Home</title>
        <meta
          name="description"
          content="Hospital Management System for appointment scheduling, doctor management, and patient care."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={true}
        />
        {children}
      </body>
    </html>
  );
}
