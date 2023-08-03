/* eslint-disable */

import AosProvider from "@/components/AosProvider";
import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Henry Okafor | Frontend developer',
  description: "A highly skilled and solution-driven software engineer with a proven track record in developing user-facing systems that are both functional and well-organized. I am dedicated to creating clean and scalable solutions while adhering to cohesive design blueprints.",
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ["Frontend Developer, React Developer, Frontend Engineer, Web Developer, User Interface (UI) Developer, Frontend Design, Tailwind CSS, Redux Developer, JavaScript Developer, TypeScript Developer, Responsive Web Design, Frontend Frameworks, Web Development, UI/UX Design, Frontend Architecture, Single Page Applications (SPAs), Frontend Performance, Frontend Testing, Mobile-First Development, Cross-Browser Compatibility"],
  authors: [{ name: 'Henry Okafor' }, { name: 'Henry Okafor', url: 'https://castelstack-portfolio.vercel.app' }],
  colorScheme: 'dark',
  creator: 'Henry Okafor',
  publisher: 'Henry Okafor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://castelstack-portfolio.vercel.app'),
  openGraph: {
    title: 'Henry Okafor | Frontend developer',
    description: 'A highly skilled and solution-driven software engineer with a proven track record in developing user-facing systems that are both functional and well-organized. I am dedicated to creating clean and scalable solutions while adhering to cohesive design blueprints.',
    url: 'https://castelstack-portfolio.vercel.app',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://res.cloudinary.com/dnvsfxlan/image/upload/v1691052515/Frame_103949_4_wamxaa.png',
        width: 800,
        height: 600,
        alt: 'Henry Okafor | Frontend developer'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: 'https://res.cloudinary.com/dnvsfxlan/image/upload/v1663547214/personal/logo_iqvogf.png',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.ico',
    },
  },
  themeColor: '#151515',
  manifest: 'https://nextjs.org/manifest.json',
  twitter: {
    card: 'summary_large_image',
    title: 'Henry Okafor | Frontend developer',
    description: 'A highly skilled and solution-driven software engineer with a proven track record in developing user-facing systems that are both functional and well-organized. I am dedicated to creating clean and scalable solutions while adhering to cohesive design blueprints.',
    siteId: '1467726470533754880',
    creator: 'henryokafor_jsx',
    creatorId: '1467726470533754880',
    images: ['https://res.cloudinary.com/dnvsfxlan/image/upload/v1691052515/Frame_103949_4_wamxaa.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <AosProvider>{children}</AosProvider>
      </body>
    </html>
  );
}
