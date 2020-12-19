import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import * as theme from '../styles/colors';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			useErrorBoundary: true,
			refetchOnWindowFocus: false,
			retry(failureCount, error) {
				if (error.status === 404) return false;
				else if (failureCount < 2) return true;
				else return false;
			},
		},
	},
});

function AppProviders({ children }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Router>{children}</Router>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export { AppProviders };
