"use client";

import InputField from "@/app/(protected)/form/_components/input-field";
import TextareaField from "@/app/(protected)/form/_components/textarea-field";
import SelectField from "@/app/(protected)/form/_components/select-fielf";
import CheckboxField from "@/app/(protected)/form/_components/checkbox-field";
import { Button } from "./ui/button";
import RadioField from "@/app/(protected)/form/_components/radio-field";

type Props = {
  form: {
    id: number;
    jsonform: string;
    createdBy: string;
    createdAt: string;
  };
  editable?: boolean;
};

const FormView = ({ form, editable }: Props) => {
  const json: any = JSON.parse(form.jsonform.split("json")[1]);
  const formTitle = json["formTitle"];
  const formSubheading = json["formSubheading"];

  return (
    <div className="h-full w-full flex items-center justify-center bg-orange-300  py-10">
      <div className=" max-h-full flex w-2/5 flex-col gap-3 justify-center items-center bg-white  rounded-md p-5">
        <div className="w-full flex flex-col justify-center items-center ">
          <h1 className=" text-xl font-semibold">{formTitle}</h1>
          <h3 className=" text-lg text-muted-foreground text-center">
            {formSubheading}
          </h3>
        </div>
        <form className=" w-full  h-full flex flex-col gap-2 p-10 overflow-auto">
          {json["formFields"].map((e: any) => {
            if (
              e["fieldType"].toLowerCase() === "text" ||
              e["fieldType"].toLowerCase() === "email" ||
              e["fieldType"].toLowerCase() === "tel" ||
              e["fieldType"].toLowerCase() === "number"
            ) {
              return (
                <InputField
                  label={e["formLabel"] || e["label"]}
                  placeholder={e["placeholder"]}
                  required={e["required"]}
                  type={e["fieldType"]}
                />
              );
            } else if (e["fieldType"].toLowerCase() === "textarea") {
              return (
                <TextareaField
                  label={e["formLabel"] || e["label"]}
                  placeholder={e["placeholder"]}
                  required={e["required"]}
                />
              );
            } else if (e["fieldType"].toLowerCase() === "select") {
              return (
                <SelectField
                  label={e["formLabel"] || e["label"]}
                  placeholder={e["placeholder"]}
                  required={e["required"]}
                  options={e["options"]}
                />
              );
            } else if (e["fieldType"].toLowerCase() === "checkbox") {
              return (
                <CheckboxField
                  label={e["formLabel"] || e["label"]}
                  name={e["fieldName"] || e["name"]}
                  required={e["required"]}
                  options={e["options"]}
                />
              );
            } else if (
              e["fieldType"].toLowerCase() === "radio" ||
              e["fieldType"].toLowerCase() === "dropdown"
            ) {
              return (
                <RadioField
                  label={e["formLabel"] || e["label"]}
                  required={e["required"]}
                  options={e["options"]}
                />
              );
            }

            return <div>{e["formLabel"] || e["label"]}</div>;
          })}

          <Button type="submit" className=" mt-5">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormView;
