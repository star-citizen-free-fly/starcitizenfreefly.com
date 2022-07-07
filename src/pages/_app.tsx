import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import favicon from '../../assets/images/favicon.svg'

function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<link rel="icon" href={favicon.src} type="image/svg+xml"/>
		</Head>
		<Component {...pageProps} />
	</>
}

export default MyApp
