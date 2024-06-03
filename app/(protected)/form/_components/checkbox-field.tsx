import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  name: string;
  label: string;
  required?: boolean;
  options: any[];
};

const CheckboxField = ({ name, label, required, options }: Props) => {
  return (
    <div className=" w-full flex flex-col gap-2">
      <h2>{label}</h2>
      {options.map((option, index) => (
        <div key={index} className="w-full flex items-center space-x-2">
          <Checkbox id={name} required={required} />
          <label
            htmlFor={option["value"] || option}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {option["label"] || option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxField;
