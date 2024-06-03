"use client";

import { Edit, Upload } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { useRouter } from "next/navigation";

const FormList = ({
  forms,
}: {
  forms: {
    id: number;
    jsonform: string;
    createdBy: string;
    createdAt: string;
  }[];
}) => {
  const router = useRouter();

  return (
    <div className="w-full grid grid-cols-3 gap-5 p-5">
      {forms.map((form) => {
        const json: any = JSON.parse(form.jsonform.split("json")[1]);

        const formTitle = json["formTitle"];
        const formSubheading = json["formSubheading"];

        return (
          <Card>
            <CardHeader>
              <CardTitle>{formTitle}</CardTitle>
              <CardDescription>{formSubheading}</CardDescription>
            </CardHeader>
            <CardContent>
              <Separator />
            </CardContent>
            <CardFooter className=" flex w-full justify-between">
              <Button variant="outline">
                <Upload className="size-4 mr-2" />
                Share
              </Button>
              <Button onClick={() => router.push(`/form/${form.id}`)}>
                <Edit className=" size-4 mr-2" />
                Edit
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default FormList;
