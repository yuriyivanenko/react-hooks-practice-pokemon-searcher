import React from "react"
import ReactDOM from "react-dom"
import "semantic-ui-css/semantic.min.css"
import App from "./components/App"
import "./index.css"
import { UserProvider } from "./contexts/UserContext"

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
)
