'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

//hideRechartsConsoleError();

export function ThemeProvider({ children }: React.PropsWithChildren<{}>) {
  return (
   
      <NextThemeProvider>
        {children}
      </NextThemeProvider>
   
  );
}
