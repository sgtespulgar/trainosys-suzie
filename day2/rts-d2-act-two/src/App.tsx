import './App.css'
import BoardComponent  from './components/BoardComponent'

function App() {
  return (
    <div className='App' style={{ minHeight: '100vh', position: 'relative' }}>
      
      <div className='App-body' style={{ paddingBottom: '8.5rem' }}>
        <BoardComponent/>
      </div>
    </div>
  )
}

export default App
