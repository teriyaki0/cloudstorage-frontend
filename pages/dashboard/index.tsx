import * as Api from "@/api";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next/types";
import { checkAuth } from "@/utils/cheakAuth";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import Sort from "@/components/sort/Sort";
import { FileItem } from "@/api/dto/files.dto";
import FileList from "@/components/file-list/FileList";
import { useSelector } from "react-redux";
import { RootState, wrapper } from "@/store/store";
import FileDetail from "@/components/file-detail/FileDetail";

interface FilesProps {
  items: FileItem;
}

const popup = ["newest", "oldest"];
const type = ["all", "photos", "documents"];

const Dashboard: NextPage<FilesProps> = ({ items }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='container mx-auto px-14 relative ml-72 '>
        <Header />
        <Sort />
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
      console.log(store.getState().index.indexPopup);
      console.log(store.getState().index.indexType);

      const indexPopup = store.getState().index.indexPopup;

      const items = await Api.files.getAll(
        type[indexPopup],
        popup[store.getState().index.indexType]
      );
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

export default Dashboard;
