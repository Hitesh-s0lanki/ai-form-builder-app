import { Textarea } from "@/components/ui/textarea";

type Props = {
  label: string;
  required?: boolean;
  placeholder: string;
};

const TextareaField = ({ label, required, placeholder }: Props) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <h2>{label}</h2>
      <Textarea placeholder={placeholder} required={required} />
    </div>
  );
};

export default TextareaField;
