import {information} from "@/constants/data";
import styles from "@/styles/components/Sidebar.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

const SlideBar = ({open, setOpen}: {open: boolean; setOpen: any}) => {
  const pathname = usePathname();

  console.log(pathname, "pathname");

  const links = [
    {text: "home", link: "/"},
    {text: "skills", link: "/skills"},
    {text: "projects", link: "/projects"},
    {text: "experiences", link: "/experiences"},
    {text: "about", link: `/about/${information.home.githubUserName}`},
    {text: "contact", link: "/contact"},
  ];
  return (
    <div className={styles.container}>
      <div className={`${styles.links} ${open && styles.openUp}`}>
        {links.map((item, i) => (
          <Link
            key={i}
            href={`${item.link}`}
            onClick={() => setOpen(!open)}
            className={`${styles.link} ${pathname === `${item.link}` && styles.active}`}
          >
            {item.text}.js
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SlideBar;
