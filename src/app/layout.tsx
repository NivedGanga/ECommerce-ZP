
import Theme from "@/core_components/providers/theme/theme";
import "./globals.css";
import ReduxProvider from "@/core_components/providers/redux/reduxProvider";
import { ToastContainer } from "react-toastify/unstyled";
import 'react-toastify/ReactToastify.css';
import Authorization from "@/core_components/providers/authorization/authorization";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Authorization>
            <Theme>
              {children}
              <ToastContainer hideProgressBar />
            </Theme>
          </Authorization>
        </ReduxProvider>
      </body>
    </html>
  );
}
