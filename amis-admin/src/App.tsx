import { BrowserRouter } from 'react-router-dom'
import { RootRoute } from './routes/route'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RootRoute />
  </BrowserRouter>
)


