import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Tab } from "evergreen-ui"
import styles from "./header.module.css"
import { useRouter } from "next/router"

const index = () => {
    const router = useRouter()

    const [scrollPositionYAXIS, setScrollPositionYAXIS] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPositionYAXIS(position)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div
            className={styles.header}
            style={
                scrollPositionYAXIS > 20
                    ? {
                          boxShadow:
                              "4px 4px 12px #eee, -4px -4px 12px #f4f4f4",
                          backgroundColor: "#FFF",
                      }
                    : router.pathname === "/products"
                    ? {
                          boxShadow:
                              "4px 4px 12px #eee, -4px -4px 12px #f4f4f4",
                          backgroundColor: "#FFF",
                      }
                    : {}
            }
        >
            <Link href="/">
                <a>
                    <h2
                        style={
                            scrollPositionYAXIS > 20
                                ? {
                                      color: "#000",
                                  }
                                : router.pathname === "/products"
                                ? {
                                      color: "inherit",
                                  }
                                : {}
                        }
                    >
                        RangoliSweets
                    </h2>
                </a>
            </Link>
            <div className={styles.links}>
                <Link href="/">
                    <a>
                        <Tab
                            isSelected={router.pathname === "/"}
                            style={
                                scrollPositionYAXIS > 20
                                    ? {
                                          color: "#000",
                                      }
                                    : router.pathname === "/products"
                                    ? {
                                          color: "inherit",
                                      }
                                    : {}
                            }
                        >
                            Home
                        </Tab>
                    </a>
                </Link>
                <Link href="/products">
                    <a>
                        <Tab
                            isSelected={router.pathname === "/products"}
                            style={
                                scrollPositionYAXIS > 20
                                    ? {
                                          color: "#000",
                                      }
                                    : router.pathname === "/products"
                                    ? {
                                          color: "inherit",
                                      }
                                    : {}
                            }
                        >
                            Products
                        </Tab>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default index
