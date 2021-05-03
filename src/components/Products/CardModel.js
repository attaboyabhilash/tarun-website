import React from "react"
import { Card } from "antd"
import Image from "next/image"
import styles from "./products.module.css"

const CardModel = ({ title, image, price }) => {
    return (
        <Card
            className={styles.card}
            hoverable
            title={title}
            cover={
                <div className={styles.card_thumb}>
                    <Image
                        alt={title}
                        src={image}
                        width="275px"
                        height="275px"
                        priority={true}
                    />
                </div>
            }
        >
            <p>
                Price: <span> &#8377; {price}/-</span>
            </p>
        </Card>
    )
}

export default CardModel
