"use client";

import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Modal,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useState } from "react";

export default function AddPostModal({ openModal, onCloseModal }) {
  const [post, setPost] = useState({ title: "", image: "", content: "" });
  console.log(post);
  return (
    <>
      <Modal
        show={openModal}
        onClose={onCloseModal}
        popup
        size="7xl"
        dismissible
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white font-paytone tracking-wider">
              Create Your Thoughts or Whatever You Want
            </h3>
            <div className="flex w-full items-center justify-center">
              <Label
                htmlFor="dropzone-file"
                className="flex h-14 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                value="Upload a cover photo"
              />
              <FileInput
                id="dropzone-file"
                className="hidden"
                type="file"
                required
                value={post.image}
                onChange={(e) => setPost({ ...post, image: e.target.value })}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="title"
                  value="Title"
                  className="font-paytone tracking-wider text-lg"
                />
              </div>
              <TextInput
                id="title"
                type="text"
                value={post.title}
                required
                onChange={(e) => setPost({ ...post, title: e.target.value })}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="content"
                  value="Content"
                  className="font-paytone tracking-wider text-lg"
                />
              </div>
              <Textarea
                id="content"
                required
                rows={10}
                className="text-md"
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
              />
            </div>
            <div className="w-full">
              <Button>Publish</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
