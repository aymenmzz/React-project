// javascript
import React from "react"
import ReactDOM from "react-dom"
import Header from "./header.js"
import Footer from "./footer.js"
import MainContent from "./main-content.js"


function Page() {
    return (
        <div className="main-div">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("message"))
