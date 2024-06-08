import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  label: string;
  required?: boolean;
};

export function InputFile({ label, required }: Props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">{label}</Label>
      <Input id="picture" type="file" />
    </div>
  );
}
