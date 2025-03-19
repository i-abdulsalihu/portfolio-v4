"use client";

import { z } from "zod";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
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
import SpringCursor from "@/app/_components/spring";
import SectionHeading from "@/app/_components/section-heading";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters",
  }),
  request: z
    .string()
    .min(5, {
      message: "Request must be at least 5 characters.",
    })
    .max(500, {
      message: "Request must be at most 500 characters.",
    }),
  email: z
    .string({
      required_error: "Email address is required",
    })
    .email({
      message: "Please provide a valid email.",
    }),
});

type ContactFormSchemaProps = z.infer<typeof contactFormSchema>;

const FormSection = () => {
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
    await new Promise((r) => setTimeout(r, 2000));
    console.log(values);
    form.reset();
  }

  return (
    <Fragment>
      <SectionHeading
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
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What&apos;s your name?</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    error={!!errors.name}
                    disabled={isSubmitting}
                    placeholder="Enter your full name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Which company or organization are you reaching out from?
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    error={!!errors.company}
                    disabled={isSubmitting}
                    placeholder="Company or organization name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="request"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What do you need help with?</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    error={!!errors.request}
                    disabled={isSubmitting}
                    placeholder="Briefly describe your request"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What&apos;s the best email to reach you at?
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    error={!!errors.email}
                    disabled={isSubmitting}
                    placeholder="Enter your email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant={"outline"}
            size={"lg"}
            className="group w-max"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            loadingText="Submitting..."
          >
            <span className="tracking-wide">Submit Message</span>
            <SpringCursor />
          </Button>
        </form>
      </Form>
    </Fragment>
  );
};

export default FormSection;
