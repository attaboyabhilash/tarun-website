import Header from "../Header"
import Meta from "../../utils/Meta"
import Footer from "../Footer"
import styles from "./Layout.module.css"

const Layout = props => {
    return (
        <>
            <Header />
            <Meta />
            <div className={styles.layout}>{props.children}</div>
            <Footer />
        </>
    )
}

export default Layout
