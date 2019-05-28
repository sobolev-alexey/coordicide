import Document, { Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta
                        name="description"
                        content="The Coordicide. Realizing IOTA’s vision of a permissionless and scalable distributed ledger technology"
                    />
                    <meta name="twitter:card" value="summary" />
                    <meta
                        property="og:title"
                        content="The Coordicide. Realizing IOTA’s vision of a permissionless and scalable distributed ledger technology"
                    />
                    <meta property="og:type" content="video.other" />
                    <meta property="og:url" content="https://coordicide.iota.org" />
                    <meta
                        property="og:image"
                        content="https://coordicide.iota.org/static/coordicide.png"
                    />
                    <meta
                        property="og:description"
                        content="The Coordicide. Realizing IOTA’s vision of a permissionless and scalable distributed ledger technology"
                    />
                    {/* <link
                        href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900"
                        rel="stylesheet"
                    /> */}
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    {/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}');
`
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
