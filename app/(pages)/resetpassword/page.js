import BackToTop from "@/app/backToTop";
import Reset from "./(ResetPassword)";

export const metadata = {
  title: "Event Siderbar - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const resetP = () => {
  return (
    <>
    <Reset/>
      <BackToTop />
    </>
  );
};

export default resetP;