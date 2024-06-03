import { useState } from 'react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { ReactQueryDevtools } from 'react-query/devtools'
import ToastProvider from 'providers/ToastProvider'
import theme from 'styles/theme'
import Head from 'next/head'
import MetadataImage from 'public/assets/metadata.jpg'
import 'styles/app.scss'
import localFont from 'next/font/local'

const satoshi = localFont({
	src: [
		{ path: './fonts/Satoshi-Light.woff2', weight: '300', style: 'normal' },
		{ path: './fonts/Satoshi-LightItalic.woff2', weight: '300', style: 'italic' },
		{ path: './fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
		{ path: './fonts/Satoshi-Italic.woff2', weight: '400', style: 'italic' },
		{ path: './fonts/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
		{ path: './fonts/Satoshi-MediumItalic.woff2', weight: '500', style: 'italic' },
		{ path: './fonts/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
		{ path: './fonts/Satoshi-BoldItalic.woff2', weight: '700', style: 'italic' },
		{ path: './fonts/Satoshi-Black.woff2', weight: '900', style: 'normal' },
		{ path: './fonts/Satoshi-BlackItalic.woff2', weight: '900', style: 'italic' },
	],
	display: 'swap',
	preload: true,
})

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient())
	const ogImageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${MetadataImage.src}`.replace(/(?<=\.io)\/{2}/, '/')

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
						<meta property='og:image' content={ogImageUrl} />
						<meta property='og:image:width' content='1200' />
						<meta property='og:image:height' content='630' />
						<meta property='og:image:alt' content='dReader Linktree' />
						<meta property='og:type' content='website'></meta>
						<meta
							property='og:description'
							content='Affordable, Authentic & Limited Edition. From manga to comics, you can now own digital graphic novels from your favorite artists and get rewarded for collecting.'
						/>
						<meta name='twitter:title' content='dReader Linktree' />
						<meta name='twitter:card' content='summary_large_image' />
						<meta name='twitter:image' content={ogImageUrl} />
						<meta
							name='twitter:description'
							content='Affordable, Authentic & Limited Edition. From manga to comics, you can now own digital graphic novels from your favorite artists and get rewarded for collecting.'
						/>
						<title>dReader</title>
					</Head>
					<main className={satoshi.className}>
						<Component {...pageProps} />
					</main>
				</ToastProvider>
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default MyApp
