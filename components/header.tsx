import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div>The Next Origuri Movies |</div>
      <div>
        <span>
          <Link href={"/"}>Home</Link>
        </span>
      </div>
    </div>
  );
}
