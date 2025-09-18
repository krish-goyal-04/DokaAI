import type { Metadata } from 'next';
import { inter, lexendDeca } from '@/app/fonts';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import NextTopLoader from 'nextjs-toploader';

import { ThemeProvider } from '@/providers/theme-provider';
import './globals.css';
import { cn } from '@/cuteui/lib/cn';import GlobalToastProvider from '@/providers/toast-provider';

export const metadata: Metadata = {
  title: 'Dokaair',
  description: 'MUlti service platform '
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"       
    dir="ltr"
    // required this one for next-themes, remove it if you are not using next-theme
    suppressHydrationWarning >
      <body className={cn(inter.variable, lexendDeca.variable, 'font-inter','bg-text-hint','text-black')}>
        <AppRouterCacheProvider>
            <ThemeProvider>
              <GlobalToastProvider>
                <NextTopLoader showSpinner={false} />
                {children}
              </GlobalToastProvider>
            </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
