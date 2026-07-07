import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import HowIWork from "./pages/how-i-work.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HowIWork />
  </StrictMode>,
)
