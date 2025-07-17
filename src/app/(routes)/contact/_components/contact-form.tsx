"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { LuArrowRight } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/shared/wrapper";
import Subheading from "../../_components/subheading";
import MotionTrigger from "@/components/shared/trigger";
import { ContactFormSchemaProps, contactFormSchema } from "@/lib/validators";

const formFields = [
  {
    name: "name",
    label: "What’s your name? *",
    placeholder: "Enter your full name",
    type: "text",
    element: Input,
  },
  {
    name: "company",
    label: "Which organization are you reaching out from?",
    placeholder: "Company or Organization name ( optional )",
    type: "text",
    element: Input,
  },
  {
    name: "request",
    label: "What do you need help with? *",
    placeholder: "Briefly describe your request",
    type: "text",
    element: Textarea,
  },
  {
    name: "email",
    label: "What’s the best email to reach you at? *",
    placeholder: "Enter your email",
    type: "email",
    element: Input,
  },
];

const ContactForm = () => {
  const form = useForm<ContactFormSchemaProps>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      request: "",
      email: "",
    },
  });

  const {
    formState: { errors, isSubmitting },
  } = form;

  async function onSubmit(values: ContactFormSchemaProps) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const { message, error } = await res.json().catch((error) => ({
          message: "Unknown error",
          error: error,
        }));

        console.error("Submission failed:", error || message);
        throw new Error(message || "Failed to send email");
      }

      toast.success("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.log(err);
      const message = err instanceof Error ? err.message : "Email failed";
      toast.error(message);
    }
  }

  return (
    <Wrapper grid className="border-b py-12 md:py-16 lg:py-20">
      <Subheading
        title={
          <span>
            If you would want to collaborate with me,{" "}
            <br className="hidden md:block" /> kindly complete this form.
          </span>
        }
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 sm:gap-8"
        >
          {formFields.map((formField, index) => (
            <MotionTrigger key={formField.name} custom={index}>
              <FormField
                control={form.control}
                name={formField.name as keyof ContactFormSchemaProps}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="underline">
                      {formField.label}
                    </FormLabel>
                    <FormControl>
                      <formField.element
                        {...field}
                        type={formField.type}
                        aria-invalid={
                          !!errors[
                            formField.name as keyof ContactFormSchemaProps
                          ]
                        }
                        disabled={isSubmitting}
                        placeholder={formField.placeholder}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionTrigger>
          ))}
          <MotionTrigger
            custom={formFields.length}
            className="group ml-auto w-max sm:ml-0"
          >
            <Button
              size={"lg"}
              variant={"outline"}
              disabled={isSubmitting}
              isLoading={isSubmitting}
              loadingText="Please hold..."
              className="!px-5"
            >
              <span className="text-xs font-medium uppercase">
                Submit Details
              </span>
              <LuArrowRight className="!size-4 -rotate-45 transition duration-200 group-hover:rotate-0" />
            </Button>
          </MotionTrigger>
        </form>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
