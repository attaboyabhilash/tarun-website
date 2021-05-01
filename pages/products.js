import { Pane } from "evergreen-ui"

export default function Products() {
    return (
        <div>
            <div style={{ width: "100%", height: "60px" }}></div>
            <h1>Products</h1>
            <Pane
                style={{
                    backgroundColor: "#fff",
                    margin: "20px 100px",
                    width: "250px",
                    padding: "20px",
                    border: "0.01em solid #eee",
                }}
            >
                <h2 style={{ margin: "0" }}>Title</h2>
                <p>This the description of the Pane.</p>
                <footer>This is Footer</footer>
            </Pane>
            <div style={{ width: "100%", height: "200vh" }}></div>
        </div>
    )
}
