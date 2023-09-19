import axios from "@/core/axios";
import { FileItem } from "@/api/dto/files.dto";

type FileType = "all" | "photos" | "trash" | "documents" | "favorites";
type Sort = "newest" | "oldests";

export const getAll = async (
  type: FileType = "all",
  sort: Sort = "newest"
): Promise<FileItem[]> => {
  return (await axios.get("/files?type=" + type + "&sortOrder=" + sort)).data;
};

export const getFile = (id: number): Promise<void> => {
  return axios.get("/files?id=" + id);
};

export const remove = (id: number): Promise<void> => {
  return axios.delete("/files?id=" + id);
};

export const favorites = (id: number): Promise<void> => {
  return axios.post("/files/favorites?id=" + id);
};

export const uploadFile = async (options: any) => {
  const { onSuccess, onError, file, onProgress } = options;

  const formData = new FormData();
  formData.append("file", file);

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
    onProgress: (event: ProgressEvent) => {
      onProgress({ percent: (event.loaded / event.total) * 100 });
    },
  };

  try {
    const { data } = await axios.post("files", formData, config);

    onSuccess();

    return data;
  } catch (err) {
    onError({ err });
  }
};
