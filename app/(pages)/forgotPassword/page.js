import BackToTop from "@/app/backToTop";
import Forgot from "./(ForgotPassword)";

export const metadata = {
  title: "Event Siderbar - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const Password = () => {
  return (
    <>
      <Forgot/>
      <BackToTop />
    </>
  );
};

export default Password;