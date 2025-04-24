import { Navigation } from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const TheHeader: React.FC = () => {
  return (
    <header
      style={{
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Navigation navLinks={navItems} />
    </header>
  );
};

export { TheHeader };
