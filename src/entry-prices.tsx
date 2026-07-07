import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Prices from "./pages/prices.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Prices />
  </StrictMode>,
)
