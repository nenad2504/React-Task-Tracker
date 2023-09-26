import Header from './components/Header.jsx'
import Tasks from './components/Tasks.jsx';

function App() { 
  const name = "Nenad";


  return (
    <>
    <div className='container'>
      <Header ime={name} />
      <Tasks />
    </div>
    </>
  )
}

export default App
