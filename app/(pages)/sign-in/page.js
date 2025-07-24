import BackToTop from "@/app/backToTop";
import Signin from "./(Sign-in)";

export const metadata = {
  title: "Become a Teacher - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};
const SigninLayout = () => {
  return (
    <>
      <Signin/>
      <BackToTop />
    </>
  );
};

export default SigninLayout;