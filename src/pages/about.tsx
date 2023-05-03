import Image from "next/image";

import styles from "@/styles/About.module.css";

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                eius tenetur nulla, fugit nihil ducimus harum officia aspernatur
                vero atque quo ut, aut, perspiciatis ab dolorem possimus
                officiis nostrum quasi?
            </p>
            <Image
                src="/images/charizard.png"
                width={300}
                height={300}
                alt="Charizard"
            />
        </div>
    );
}
