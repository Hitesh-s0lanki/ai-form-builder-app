import CreateNewForm from "@/components/create-new-form-button";
import FormList from "@/components/form-list";
import { getAllForm } from "@/lib/form.actions";
import { form as formSchema } from "@/db/schema";

const DashboardPage = async () => {
  const { message, forms } = await getAllForm();

  if (message) {
    return <div>{message}</div>;
  }

  return (
    <div className="h-full w-full p-10 flex flex-col gap-5">
      <div className=" w-full flex  justify-between">
        <h1 className=" text-2xl font-semibold">Dashboard</h1>
        <CreateNewForm />
      </div>
      <FormList forms={forms as (typeof formSchema.$inferSelect)[]} />
    </div>
  );
};

export default DashboardPage;
