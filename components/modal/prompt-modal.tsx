import { usePromptModal } from "@/hooks/use-prompt-model";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import { onCreateForm } from "@/lib/form.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  prompt: z
    .string()
    .min(5, { message: "The Prompt need to be more than 5 letter" }),
});

const PromptModal = () => {
  const router = useRouter();
  const { isOpen, onClose } = usePromptModal();

  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    onCreateForm(values.prompt)
      .then((res) => {
        form.reset();
        router.push(`/form/${res}`);
        onClose();
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new Form</DialogTitle>
          <DialogDescription>
            write your prompt down to create a form.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prompt</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Student Registration for coding workshop on React & react native"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading} className=" w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PromptModal;
