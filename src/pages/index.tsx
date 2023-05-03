import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Página Principal</title>
                <meta name="keywords" content="Roupas, Calçados, Boné"></meta>
                <meta
                    name="description"
                    content="Encontre a melhor roupa para você"
                ></meta>
            </Head>
            <div>
                <h1 className={styles.title}>Hello World</h1>
                <Image src="/next.svg" width={500} height={500} alt="Logo" />
            </div>
        </>
    );
}
