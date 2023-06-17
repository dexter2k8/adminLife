import styles from "./styles.module.scss";
import { memo, useCallback, useContext } from "react";
import Image from "next/image";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { MenuContext } from "@/hook/menuContext";
import { AuthContext } from "@/hook/authContext";
import { Logout } from "@mui/icons-material";
import Link from "next/link";

interface IUserDetailsProps {
  avatar?: string;
  username: string;
  email: string;
}

function UserDetails({ avatar, username, email }: IUserDetailsProps) {
  const { collapsed } = useContext(MenuContext);
  const { signOut } = useContext(AuthContext);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <div className={styles.userDetails}>
      <figure>{avatar ? <Image src={avatar} alt="avatar" width={40} height={40} /> : <PersonOutlineIcon />}</figure>
      <section>
        <div>
          <h4>{username}</h4>
          <p>{email}</p>
        </div>
        <Link href={""} onClick={handleSignOut}>
          <Logout />
        </Link>
      </section>
    </div>
  );
}
export default memo(UserDetails);
