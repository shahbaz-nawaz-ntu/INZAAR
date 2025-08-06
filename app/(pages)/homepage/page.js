import BackToTop from "@/app/backToTop";
import Homepage from "./(Home)page";

export const metadata = {
  title: "Login & Register - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const LoginLayout = () => {
  return (
    <>
      <Homepage/>
      <BackToTop />
    </>
  );
};

export default LoginLayout;
