import Navbar from "./_components/navbar";

const MarkingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default MarkingLayout;
