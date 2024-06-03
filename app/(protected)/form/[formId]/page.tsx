import FormView from "@/components/form-view";
import { getFormById } from "@/lib/form.actions";

interface IParams {
  params: { formId: string };
}

const FormIdPage = async ({ params }: IParams) => {
  const { message, form } = await getFormById(params.formId);

  if (message) {
    return <div>{message}</div>;
  }

  return <FormView form={form as any} editable />;
};

export default FormIdPage;
