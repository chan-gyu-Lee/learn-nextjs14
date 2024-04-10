"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/nav.module.css";

export default function Navi() {
  const path = usePathname();
  console.log(path);

  return path === "/about-us/company/jobs/sales" ? null : (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About us</Link>
        </li>
      </ul>
    </div>
  );
}
