import {UserContextProvider} from './Context/UserContext'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
function App() {


  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes/>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
