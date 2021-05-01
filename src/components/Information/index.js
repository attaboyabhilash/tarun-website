import React from "react"
import styles from "./information.module.css"
import { Card } from "antd"

const index = () => {
    return (
        <Card
            title="Contact Information"
            hoverable
            className={styles.information}
        >
            <p>Contact Number: +91-9999999999</p>
            <p>
                Address: Rangoli Complex, opposite KMOU Bus Stand, Pithoragarh,
                Uttarakhand - 262501
            </p>
        </Card>
    )
}

export default index
