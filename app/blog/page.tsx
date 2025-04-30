import { Posts } from "../../components/Posts";
import { PostSearch } from "../../components/PostSearch";
import s from "../../styles/global.module.css";

// export const metadata: Metadata = {
//   title: "Blog Next App",
// };

export default function Blog() {
  return (
    <div>
      <h1 className={s.title}>Blog</h1>
      <PostSearch />
      <Posts />
    </div>
  );
}
