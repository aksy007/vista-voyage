import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Trash2 } from "lucide-react";
import { Box, Button, TextField } from "@mui/material";
import { StackCol, StackRow } from "../../utils";
import { useStoryState } from "../../state";

const DEFAULT_STORY_STATE = {
  title: "",
  description: "",
  address: "",
  mediaFiles: [],
};

const NewStory = () => {
  const { setStory } = useStoryState();
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: DEFAULT_STORY_STATE,
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const onFormSubmit = (data: any) => {
    setStory(data);
    reset({
      title: "",
      description: "",
      address: "",
      mediaFiles: [],
    });
    setUploadedFiles([]);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files || !files.length) return;
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleFileDelete = (fileToDelete: File) => {
    setUploadedFiles((prev) => prev.filter((file) => file !== fileToDelete));
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <StackCol spacing={2}>
        {/* Title */}
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Title"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        {/* Description */}
        <Controller
          name="description"
          control={control}
          //   rules={{ required: "Description is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Description"
              multiline
              rows={3}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        {/* Address */}
        <Controller
          name="address"
          control={control}
          rules={{ required: "Address is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Address"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        {/* File Upload (Images/Videos) */}
        <input
          type="file"
          accept="image/*,video/*"
          multiple
          {...register("mediaFiles")}
          onChange={handleFileChange}
        />

        {uploadedFiles.length > 0 && (
          <Box
            sx={{
              maxHeight: "100px",
              overflowY: "scroll",
              border: "1px solid #ccc",
              p: 1,
            }}
          >
            <ul>
              {uploadedFiles?.map((file, index) => (
                <StackRow
                  key={index}
                  sx={{
                    marginBottom: 1.5,
                    justifyContent: "space-between",
                  }}
                >
                  <li key={index}>
                    {file.name} ({file.type})
                  </li>
                  <Trash2 onClick={() => handleFileDelete(file)} />
                </StackRow>
              ))}
            </ul>
          </Box>
        )}

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </StackCol>
    </form>
  );
};

export default NewStory;
