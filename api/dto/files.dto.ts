import { User } from "@/api/dto/auth.dto";

export interface FileItem {
  map(arg0: (item: any) => import("react").JSX.Element): import("react").ReactNode;
  id: number;
  filename: string;
  originalName: string;
  size: number;
  mimetype: string;
  user: User;
  deletedAt: string | null;
  createAt: string;
  favorites: boolean;
}
