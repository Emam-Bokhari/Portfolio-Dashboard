"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Placeholder from "@tiptap/extension-placeholder";

const Tiptap = ({
  mainContent,
  onChange,
  placeholder,
}: {
  mainContent: string;
  placeholder: string;
  onChange: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
          levels: [2],
        },
      }),
      BulletList.configure(),
      OrderedList.configure(),
      ListItem.configure(),
      Placeholder.configure({
        placeholder: placeholder || "Type your content here...",
      }),
    ],
    content: mainContent || "",
    editorProps: {
      attributes: {
        class:
          "rounded-md border min-h-[250px] border-[#27272A] p-2 mt-2  focus:outline-none",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col justify-stretch min-h-[250px]">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
