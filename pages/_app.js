import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Layout from "../src/components/Layout"
import { Spinner } from "evergreen-ui"
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter()
    const [pageLoading, setPageLoading] = useState(false)

    useEffect(() => {
        const handleStart = () => {
            setPageLoading(true)
        }
        const handleComplete = () => {
            setPageLoading(false)
        }

        router.events.on("routeChangeStart", handleStart)
        router.events.on("routeChangeComplete", handleComplete)
        router.events.on("routeChangeError", handleComplete)
    }, [router])

    return (
        <Layout>
            {pageLoading ? (
                <div className="spinner">
                    <div className="inner_spinner">
                        <Spinner size={48} />
                        <h4>Loading</h4>
                    </div>
                </div>
            ) : (
                <Component {...pageProps} />
            )}
        </Layout>
    )
}

export default MyApp
