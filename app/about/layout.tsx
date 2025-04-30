import Link from "next/link";
import s from "../../styles/global.module.css";
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={s.about}>
      <h1 className={s.title}>About us</h1>
      <ul>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
