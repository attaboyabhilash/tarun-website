import { Autocomplete, TextInput, Button } from "evergreen-ui"
import { FaSearch } from "react-icons/fa"
import React, { useState, useEffect } from "react"
import styles from "./hero.module.css"

const index = () => {
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
        <div className={styles.hero_section}>
            <div className={styles.svg_module}>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    style={
                        scrollPositionYAXIS > 150
                            ? { height: 0 }
                            : scrollPositionYAXIS > 100
                            ? { height: 50 }
                            : scrollPositionYAXIS > 50
                            ? { height: 100 }
                            : {}
                    }
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={styles.shape_fill}
                    ></path>
                </svg>
            </div>

            <img
                src="/assets/bakery_store.jpg"
                alt="bakery"
                className={styles.bakery}
            />
            <h1 className={styles.hero_title}>
                Rangoli Sweets, Restaurant &amp; Bakers
            </h1>
            <p className={styles.hero_subTitle}>
                The best sweets and bakers in Pithoragarh.
            </p>
            <div className={styles.autoComplete}>
                <Autocomplete
                    width={400}
                    onChange={changedItem => console.log(changedItem)}
                    items={[
                        "Pastry",
                        "Cakes",
                        "Rasgulla",
                        "Kaju Barfi",
                        "Bread",
                    ]}
                >
                    {props => {
                        const {
                            getInputProps,
                            getRef,
                            inputValue,
                            openMenu,
                        } = props
                        return (
                            <TextInput
                                placeholder="Search Items..."
                                value={inputValue}
                                ref={getRef}
                                height={40}
                                width={400}
                                {...getInputProps({
                                    onFocus: () => {
                                        openMenu()
                                    },
                                })}
                            />
                        )
                    }}
                </Autocomplete>
                <Button
                    appearance="primary"
                    marginLeft={10}
                    height={40}
                    iconBefore={FaSearch}
                >
                    Search
                </Button>
            </div>
        </div>
    )
}

export default index
