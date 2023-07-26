import './App.css'

function App() {

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input placeholder='Avengers, The Matrix'></input>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        Results
      </main>
    </div>
  )
}

export default App
