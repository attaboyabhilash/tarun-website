import Link from "next/link"
import React from "react"
import { FaFacebookF, FaInstagram, FaHeart } from "react-icons/fa"
import styles from "./footer.module.css"

const index = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_left}>
                <Link href="/">
                    <a>
                        <h2 className={styles.foot_header}>RangoliSweets</h2>
                    </a>
                </Link>
                <div className={styles.links}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/#about">
                        <a>About</a>
                    </Link>
                    <Link href="/products">
                        <a>Products</a>
                    </Link>
                </div>
                <small>Copyright &copy; 2021, rangolisweets.com,</small>
                <br />
                <small>All Rights Reserved.</small>
            </div>
            <div className={styles.footer_right}>
                <div className={styles.icons}>
                    <a
                        target="_blank"
                        href="https://facebook.com/rangolisweets/"
                    >
                        <FaFacebookF className={styles.facebook} />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/rangoli_sweets/"
                    >
                        <FaInstagram className={styles.insta} />
                    </a>
                </div>
                <div className={styles.signature}>
                    <small>
                        Made with <FaHeart className={styles.heart} /> by&nbsp;
                        <a
                            target="_blank"
                            href="https://www.attaboyabhilash.com"
                        >
                            @attaboyabhilash
                        </a>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default index
