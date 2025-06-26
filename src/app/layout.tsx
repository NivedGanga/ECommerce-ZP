
import Theme from "@/core_components/providers/theme/theme";
import "./globals.css";
import ReduxProvider from "@/core_components/providers/redux/reduxProvider";
import { ToastContainer } from "react-toastify/unstyled";
import 'react-toastify/ReactToastify.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Theme>
            {children}
            <ToastContainer hideProgressBar />
          </Theme>
        </ReduxProvider>
      </body>
    </html>
  );
}
