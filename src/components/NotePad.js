import React, { useState, useEffect } from "react";
import "./Note.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const NotePad = () => {

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: ({ editor }) => {
      const newText = editor.getHTML();
      localStorage.setItem(`savedText`, newText);
    },
  });

  useEffect(() => {
    const savedText = localStorage.getItem(`savedText`);
    console.log("test", savedText)
    if (savedText && editor) {
      const waitForEditor = setInterval(() => {
        if (editor.commands) {
          clearInterval(waitForEditor);
          editor.chain().setContent(savedText).run();
        }
      }, 50);
    }
  }, [editor]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.shiftKey) {
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      editor.chain().setContent(editor.getText()).run();
    } else if (event.key === "Backspace" && event.shiftKey) {
      editor.chain().setContent("").run();
      localStorage.setItem(`savedText`, "");
    }
  };

  return <EditorContent editor={editor} onKeyDown={handleKeyDown} />;
};

export default NotePad;
