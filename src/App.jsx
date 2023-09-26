import Header from './components/Header.jsx'

function App() { 
  const name = "Nenad";


  return (
    <>
    <div className='container'>
      <Header ime={name} />
    </div>
    </>
  )
}

export default App
