//Layout component fro navbar if i willneed it , next uses routing from pages folder..
import Link from "next/link";

const Layout = ({ children }) => (
  <div>
    <Link href="/">
      <a style={{ marginRight: "10px" }}>Home</a>
    </Link>
    <Link href="/testAbout">
      <a>About</a>
    </Link>
  </div>
);

export default Layout;
