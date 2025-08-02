import dynamic from 'next/dynamic';
import BackToTop from '@/app/backToTop';

export const metadata = {
  title: "Become a Teacher - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

// Dynamically load client component
const NextData = dynamic(() => import('./(Nextdata)/index'), { ssr: false });

const NextdataPage = () => {
  return (
    <>
      <NextData />
      <BackToTop />
    </>
  );
};

export default NextdataPage;
