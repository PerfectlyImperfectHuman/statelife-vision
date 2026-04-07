import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-1 pt-[calc(2.25rem+56px)] md:pt-[calc(2.25rem+72px)]" role="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
