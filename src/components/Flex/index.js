import React from "react"
import Link from "next/link"
import styles from "./flex.module.css"
import { Button } from "evergreen-ui"
import { BsArrowRight } from "react-icons/bs"

const index = () => {
    return (
        <section className={styles.parallax_one}>
            <div className={styles.parallax_inner}>
                <h2>The best bakery and sweets shop in Pithoragarh.</h2>
                <Link href="/products">
                    <a>
                        <Button appearance="primary" height={40}>
                            Products <BsArrowRight className={styles.icon} />
                        </Button>
                    </a>
                </Link>
            </div>
        </section>
    )
}

export default index
