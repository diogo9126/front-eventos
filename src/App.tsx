import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import { AppRoutes } from './routes';
import { MenuLateral } from './shared/components';
import { AppThemeProvider, AppDrawerProvider } from './shared/contexts';

/* ThemeProvider: is the provider theme */

export const App = () => {
  return (
    <AppThemeProvider>
      <AppDrawerProvider>
        <BrowserRouter>

          <MenuLateral>
            <AppRoutes />
          </MenuLateral>

        </BrowserRouter>
      </AppDrawerProvider>
    </AppThemeProvider>
  );
};
