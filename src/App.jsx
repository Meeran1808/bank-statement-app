import Auth from './components/Auth'
import PDFUpload from './components/PDFUpload'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Bank Statement Analyzer</h2>
      <Auth />
      <PDFUpload />
    </div>
  )
}

export default App
