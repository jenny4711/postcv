import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppSideBar from "@/component/AppSideBar";
import RightSideMenu from "@/component/RightSideMenu";
import { DataProvider } from "@/context/DataContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head>
      <body className={`${inter.variable} antialiased overflow-x-hidden touch-none`} style={{WebkitOverflowScrolling: 'touch'}}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="relative flex justify-center min-h-screen w-screen max-w-full overflow-hidden">
            <div className="flex flex-row w-full max-w-[1265px] overflow-hidden">
              {/* Left Sidebar w-15 sm:w-25 md:w-35 lg:w-75.5 xl:w-80.5 */}
              <div className="w-0 sm:w-15 lg:w-75.5 xl:w-80.5 h-screen sticky top-0 overflow-hidden">
                <div className="w-full h-full">
                  <AppSideBar />
                </div>
              </div>

              {/* Main Content Area */}
              <main className="flex-1 min-w-[320px] max-w-[602px] border-x border-gray-100 overflow-hidden">
                <DataProvider>
                  {children}
                </DataProvider>
              </main>

              {/* Right Sidebar */}
              <div className="w-0 md:w-[300px] transition-all duration-300 ease-in-out h-screen sticky top-0 overflow-hidden">
                <div className="opacity-0 md:opacity-100 transition-opacity duration-300">
                  <RightSideMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
