import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  label: string;
  required?: boolean;
  placeholder: string;
  options: any[];
};

const SelectField = ({ label, required, placeholder, options }: Props) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <h2>{label}</h2>
      <Select required={required}>
        <SelectTrigger className="w-full" defaultValue={options[0].value}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem value={option["value"] || option}>
                {option.label || option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectField;
