import * as Api from "@/api";
import { GetServerSideProps, NextPage } from "next/types";
import { checkAuth } from "@/utils/cheakAuth";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { FileItem } from "@/api/dto/files.dto";
import FileList from "@/components/file-list/FileList";
import { wrapper } from "@/store/store";
import { User } from "@/api/dto/auth.dto";

interface FilesProps {
  items: FileItem;
  userData: User;
}

const Favorities: NextPage<FilesProps> = ({ items }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='container mx-auto px-14 relative ml-72 '>
        <Header />
        <FileList items={items} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    const authProps = await checkAuth(ctx);

    if ("redirect" in authProps) {
      return authProps;
    }

    try {
      const items = await Api.files.getAll("favorites");
      return {
        props: {
          items,
        },
      };
    } catch (err) {
      console.log(err);
      return {
        props: { items: [] },
      };
    }
  });

export default Favorities;
