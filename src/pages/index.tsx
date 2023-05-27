import { Inter } from 'next/font/google'
import { Links } from '@/src/components/Links'
import { Headline } from '@/src/components/Headline'
import { Header } from '@/src/components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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