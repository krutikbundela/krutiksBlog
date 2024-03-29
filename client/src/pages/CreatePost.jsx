import { TextInput, Select, FileInput, Button } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function CreatePost() {
  const category = [
    "Philosophy",
    "Psychology",
    "Coding/Programming",
    "Finance/Investing",
    "Science and Technology",
    "Literature",
    "History",
    "Education Pedagogy",
    "Health and Wellness",
    "Environmental Studies",
    "Art and Design",
    "Career Development",
    "Politics and Current Affairs",
    "Travel and Culture",
    "Self-improvement and Personal Growth",
    "Entrepreneurship",
    "Mathematics",
    "Sociology",
    "Linguistics and Languages",
    "Media and Communication",
  ];
  return (
    <>
      <div className="p-3 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-center text-3xl my-7 font-semibold">Create Post</h1>
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col gap-4  sm:flex-row justify-between">
            <TextInput
              type="text"
              placeholder="Title"
              required
              id="title"
              className="flex-1"
            />
            <Select>
              <option value="uncategorized">Select a Category</option>;
              {category.map((cat, index) => {
                return (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                );
              })}
            </Select>
          </div>

          <div className="flex gap-4 item-center justify-between border-4 border-teal-500 border-dotted p-3">
            <FileInput type="file" accept="image/*" />
            <Button
              type="button"
              gradientDuoTone={"purpleToBlue"}
              size="sm"
              outline
            >
              Upload Image
            </Button>
          </div>
          <ReactQuill
            theme="snow"
            placeholder="Write Something..."
            className="h-72 mb-12"
            required
          />
          <Button type="submit" gradientDuoTone={"purpleToPink"}>
            Publish
          </Button>
        </form>
      </div>
    </>
  );
}
