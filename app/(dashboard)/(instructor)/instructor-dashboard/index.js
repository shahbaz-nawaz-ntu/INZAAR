
import BackToTop from "@/app/backToTop";
import InstructorDashboard from "@/components/pages/InstructorDashboardPage";

export const metadata = {
  title: "Instructor Dashboard - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const InstructorDashboardLayout = () => {
  return (
    <>
      <InstructorDashboard />
      <BackToTop />
    </>
  );
};

export default InstructorDashboardLayout;
