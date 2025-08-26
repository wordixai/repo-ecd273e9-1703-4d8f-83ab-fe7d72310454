import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import FeatureCards from '@/components/FeatureCards';
import AgentStack from '@/components/AgentStack';
import UseCases from '@/components/UseCases';
import PowerStack from '@/components/PowerStack';
import CustomerStories from '@/components/CustomerStories';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <FeatureCards />
        <AgentStack />
        <UseCases />
        <PowerStack />
        <CustomerStories />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;