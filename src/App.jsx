import './App.css'
import Contenedor from './components/Contenedor'
import Pie from './components/Pie'
import { DeportesProvider } from './context/DeportesContext'

function App() {

  return (
      <div>
        <DeportesProvider>
          <Contenedor/>
          
        </DeportesProvider>
        <Pie></Pie>
      </div>
  )
}

export default App