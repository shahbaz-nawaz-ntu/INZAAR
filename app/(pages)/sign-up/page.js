import BackToTop from "@/app/backToTop";
import Signup from "./(Sign-up)";

export const metadata = {
  title: "Become a Teacher - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};
const SignupLayout = () => {
  return (
    <>
      <Signup/>
      <BackToTop />
    </>
  );
};

export default SignupLayout;
