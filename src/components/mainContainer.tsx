import FooterComponent from "./footer";
import NavbarComponent from "./navbar";

import styles from "../styles/MainContainer.module.css";

export default function MainContainer({ children }: any) {
    return (
        <>
            <NavbarComponent />
            <div className={styles.container}>{children}</div>
            <FooterComponent />
        </>
    );
}
