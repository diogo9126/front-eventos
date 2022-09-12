import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts';
/* ThemeProvider: is the provider theme */

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}
