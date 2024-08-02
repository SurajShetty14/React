import './App.css'
import Card from './components/Card'


function App() {


  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md '>Vite with Tailwind</h1>
      <Card userName="Suraj" img="https://images.pexels.com/photos/2462023/pexels-photo-2462023.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Card userName="Ram" post='Web Developer'/>
      <Card/>
    </>
  )
}

export default App
