import { Input } from "@/components/ui/input";

type Props = {
  label: string;
  required?: boolean;
  placeholder: string;
  type?: string;
};

const InputField = ({ label, required, placeholder, type = "text" }: Props) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <h2>{label}</h2>
      <Input placeholder={placeholder} required={required} type={type} />
    </div>
  );
};

export default InputField;
