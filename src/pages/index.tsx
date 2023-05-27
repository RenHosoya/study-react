import { Inter } from 'next/font/google'
import { Links } from '@/src/components/Links'
import { Headline } from '@/src/components/Headline'
import { Header } from '@/src/components/Header';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <Headline title="pages/index.tsx" />
      <Links />
    </main>
  );
};