import React from "react"
import CardModel from "./CardModel"
import { Button } from "evergreen-ui"
import styles from "./products.module.css"
import Products from "./Products.json"

const index = () => {
    return (
        <div className={styles.products}>
            <h2>Products</h2>
            <p>
                We offer a wide range of products from sweets to bakery items.
            </p>
            <div className={styles.cardTab}>
                {Products.map(prod => {
                    return (
                        <CardModel
                            id={prod.id}
                            title={prod.title}
                            image={prod.image}
                            price={prod.price}
                        />
                    )
                })}
            </div>
            <Button
                appearance="minimal"
                height={40}
                className={styles.see_more}
            >
                See More
            </Button>
        </div>
    )
}

export default index
