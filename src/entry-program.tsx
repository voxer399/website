import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Program from "./pages/program.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Program />
  </StrictMode>,
)
