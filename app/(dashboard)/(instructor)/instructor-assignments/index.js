import BackToTop from "@/app/backToTop";
import AssignmentsPage from "@/components/pages/AssignmentsPage";

export const metadata = {
  title:
    "Instructor Assignments - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const AssignmentsLayout = () => {
  return (
    <>
      <AssignmentsPage />

      <BackToTop />
    </>
  );
};

export default AssignmentsLayout;
