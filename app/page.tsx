import Rail from '@/components/Rail';
import Hero from '@/components/Hero';
import Herald from '@/components/Herald';
import Wmata from '@/components/Wmata';
import VibeCheck from '@/components/VibeCheck';
import Archive from '@/components/Archive';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Rail />
      <main>
      <Hero /><Herald /><Wmata /><VibeCheck /><Archive /><Footer />
      </main>
    </>
  );
}
