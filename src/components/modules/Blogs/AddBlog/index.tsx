"use client";

import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { blogSchema } from "./blog.validation";
import Tiptap from "./Tiptap";
import { addBlog } from "@/app/services/Blog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AddBlogForm() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      thumbnail: "",
      category: "",
      authorName: "",
      introduction: "",
      mainContent: "",
      tags: [],
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await addBlog(data);

      if (response?.success) {
        toast.success(response?.message);
        router.push("/blogs");
      } else {
        toast.error(response.error[0]?.message);
      }
    } catch {
      toast.error("Something went wring!");
    }
  };

  return (
    <Fragment>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-4">
            {/* title and thumbnail */}
            <div className="flex flex-col xl:flex-row gap-5">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Title <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your project title"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="thumbnail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Thumbnail URL <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter thumbnail URL" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* category and author name */}
            <div className="flex flex-col xl:flex-row gap-5">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Category <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your blog category"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="authorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Author Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter author name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* introduction */}
            <FormField
              control={form.control}
              name="introduction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Introduction <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-20"
                      {...field}
                      placeholder="Enter blog introduction"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* main content */}
            <FormField
              control={form.control}
              name="mainContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Main Content <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Tiptap
                      mainContent={field.value}
                      onChange={field.onChange}
                      placeholder="Write the main content of your blog here"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* tags */}
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-20"
                      {...field}
                      placeholder="Enter tags (comma-separated)"
                      onChange={(e) => {
                        const value = e.target.value;
                        form.setValue(
                          "tags",
                          value.split(",").map((item) => item.trim())
                        );
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* submit button */}
            <Button
              type="submit"
              className="w-full bg-[#8750F7] hover:bg-[#733DD6] text-white cursor-pointer"
              disabled={isSubmitting}
            >
              Add Blog
            </Button>
          </div>
        </form>
      </Form>
    </Fragment>
  );
}
