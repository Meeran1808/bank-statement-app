import Auth from './components/Auth'
import PDFUpload from './components/PDFUpload'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>📊 Bank Statement Analyzer</h1>
      <div className="card">
        <Auth />
      </div>
      <div className="card">
        <PDFUpload />
      </div>
    </div>
  )
}

export default App
