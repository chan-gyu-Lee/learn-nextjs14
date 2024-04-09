"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navi() {
  const path = usePathname();
  console.log(path);
  const [count, setCount] = useState(0);
  return path === "/about-us/company/jobs/sales" ? null : (
    <div>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About us</Link>
        </li>
        <li>
          <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </li>
      </ul>
    </div>
  );
}
