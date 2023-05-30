import styles from "./styles.module.scss";
import { memo, useCallback, useContext } from "react";
import Image from "next/image";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { MenuContext } from "@/hook/menuContext";
import { AuthContext } from "@/hook/authContext";
import { Logout } from "@mui/icons-material";
import Link from "next/link";

interface ISidebarfooterProps {
  avatar?: string;
  username: string;
  email: string;
}

function SidebarFooter({ avatar, username, email }: ISidebarfooterProps) {
  const { collapsed } = useContext(MenuContext);
  const { signOut } = useContext(AuthContext);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <footer className={styles.sidebarFooter}>
      <figure>{avatar ? <Image src={avatar} alt="avatar" width={48} height={48} /> : <PersonOutlineIcon />}</figure>
      <section className={collapsed ? styles.show : undefined}>
        <div>
          <h4>{username}</h4>
          <p>{email}</p>
        </div>
        <Link href={""} onClick={handleSignOut}>
          <Logout />
        </Link>
      </section>
    </footer>
  );
}
export default memo(SidebarFooter);
