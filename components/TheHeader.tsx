import Link from "next/link";

const TheHeader: React.FC = () => {
  return (
    <header
      style={{
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <b style={{ margin: 0 }}>My Blog</b>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1rem",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { TheHeader };
