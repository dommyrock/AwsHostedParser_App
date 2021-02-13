import { useRouter } from "next/router";
import Link from "next/link";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Post: {id}</h1>
      <ul>
        {/* THIS IS HOW WE SHOULD LINK TO THIS DYNAMIC ROUTE */}
        <li>
          <Link href="/job/[id]" as={`/job/${id}`}>
            <h3>First comment</h3>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Post;
