import BackToTop from "@/app/backToTop";
import InstructorProfile from "@/components/pages/InstructorProfile";

export const metadata = {
  title: "Instructor Profile - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const InstructorProfileLayout = () => {
  return (
    <>
      <InstructorProfile />
      <BackToTop />
    </>
  );
};

export default InstructorProfileLayout;
