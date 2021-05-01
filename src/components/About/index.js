import React from "react"
import styles from "./about.module.css"

const index = () => {
    return (
        <div id="about" className={styles.about}>
            <h2>About Us</h2>
            <div className={styles.about_details}>
                <section>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas accumsan massa vel orci suscipit vehicula.
                        Suspendisse porta vulputate scelerisque. Ut eleifend,
                        sapien et egestas interdum, arcu dui gravida mauris,
                        quis cursus metus erat non tortor. Praesent laoreet
                        aliquam tellus, in mollis mauris sollicitudin sit amet.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vivamus vitae nisi
                        leo. Aliquam et malesuada justo. Quisque aliquet nec
                        sapien nec porta. Nulla et urna quis ligula pellentesque
                        volutpat mattis porta metus. Praesent pellentesque
                        cursus gravida.
                    </p>
                    <p>
                        Integer vel mollis lacus, vel aliquam libero. Curabitur
                        suscipit id turpis id pretium. Maecenas eget facilisis
                        sapien. Fusce fringilla enim non dui fringilla
                        sollicitudin. Curabitur id lorem odio. Donec est turpis,
                        porta sit amet commodo quis, finibus eget mi. Ut mattis
                        mattis convallis. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                    </p>
                </section>
                <section>
                    <img
                        src="https://pbs.twimg.com/profile_images/442100778639974400/Zj7Hfan__400x400.jpeg"
                        alt="profile"
                    />
                </section>
            </div>
        </div>
    )
}

export default index
