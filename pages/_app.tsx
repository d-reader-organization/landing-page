import { useState } from 'react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { ReactQueryDevtools } from 'react-query/devtools'
import ToastProvider from 'providers/ToastProvider'
import theme from 'styles/theme'
import Head from 'next/head'
import 'styles/app.scss'

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<ToastProvider>
					<CssBaseline />

					<Head>
						<meta
							name='viewport'
							content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
						/>
						<title>dReader</title>
					</Head>

					<Component {...pageProps} />
				</ToastProvider>
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default MyApp
