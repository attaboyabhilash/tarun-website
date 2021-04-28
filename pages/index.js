import Hero from "../src/components/Hero"
import styles from "../styles/home.module.css"

export default function Home() {
    return (
        <>
            <Hero />
            <img
                src="/assets/cursor.svg"
                alt="cursor"
                className={styles.cursor}
            />
            <div style={{ height: "100vh", width: "100%" }}></div>
        </>
    )
}
