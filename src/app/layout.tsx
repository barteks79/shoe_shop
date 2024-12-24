import Header from '@/components/header/Header';

import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
   title: 'Shoe Shop',
   description: 'Buy new-fashioned trainers for attractive prices!'
};

export default function RootLayout({ children }: PropsWithChildren) {
   return (
	  <html lang="en">
		 <body>
			<Header />
			{children}
		 </body>
	  </html>
   );
}