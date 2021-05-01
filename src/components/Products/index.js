import { Card } from "antd"
import React from "react"
import styles from "./products.module.css"

const index = () => {
    return (
        <div className={styles.products}>
            <h2>Products</h2>
            <p>
                We offer a wide range of products from sweets to bakery items.
            </p>
            <Card hoverable title="Product 1" style={{ width: "250px" }}>
                This is description of product
            </Card>
        </div>
    )
}

export default index
