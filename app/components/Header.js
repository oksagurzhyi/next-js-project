import Link from "next/link";
import css from "../page.module.css";

export const Header = () => {
  return (
    <header className={css.headerContainer}>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
};
