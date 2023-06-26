"use client";

import { Header } from "@/components";
import { cn, queryClient } from "@/lib";
import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Share Eat",
  description: "Share Eat is a platform for sharing food with your community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-slate-900")}>
        <QueryClientProvider client={queryClient}>
          <main className="container mx-auto px-6">
            <Header />
            <Toaster />
            <div className="flex w-full flex-col py-5">{children}</div>
          </main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
