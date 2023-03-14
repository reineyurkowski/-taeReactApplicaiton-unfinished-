import Modules from './index'
// import * as Modules from './index'
import './index.css'

Modules.ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Modules.React.StrictMode>
    <Modules.Header />
    <Modules.Body />
    <Modules.Footer />
  </Modules.React.StrictMode>
)
