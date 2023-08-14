import Nav from '@/components/Nav';
import './globals.css'
import React from 'react';
import Provider from '@/components/Provider';

export const metadata = {
  title: 'My first next app',
  description: 'I am very happy for build my first next app'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className=""></div>
          <main className='app'>
            <Nav></Nav>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
