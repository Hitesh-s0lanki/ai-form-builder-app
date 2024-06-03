import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  label: string;
  required?: boolean;
  options: any[];
};

const RadioField = ({ label, required, options }: Props) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <h2>{label}</h2>
      <RadioGroup
        defaultValue={options[0]["value"] || options[0]}
        required={required}
      >
        {options.map((option, index) => (
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value={option["value"] || option}
              id={"r" + index}
            />
            <Label htmlFor={"r" + index}>{option["label"] || option}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioField;
