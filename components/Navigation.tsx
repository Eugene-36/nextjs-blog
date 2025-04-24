"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationProps = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavigationProps[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  return (
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
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              style={{
                color: pathname === link.href ? "lightblue" : "",
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navigation };
