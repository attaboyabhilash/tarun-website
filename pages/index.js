import Hero from "../src/components/Hero"
import About from "../src/components/About"
import Contact from "../src/components/Contact"
import FAQ from "../src/components/FAQ"
import Information from "../src/components/Information"

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Contact />
            <FAQ />
            <Information />
            <div style={{ height: "100vh", width: "100%" }}></div>
        </>
    )
}
