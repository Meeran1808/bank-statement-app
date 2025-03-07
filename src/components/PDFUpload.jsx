import { useState } from 'react'
import supabase from '../supabaseClient'

export default function PDFUpload() {
  const [file, setFile] = useState(null)
  const [results, setResults] = useState(null)

  const handleUpload = async () => {
    const user = (await supabase.auth.getUser()).data.user
    if (!user) {
      alert('Please login first!')
      return
    }

    const filename = `${user.id}/${Date.now()}-${file.name}`
    const { error } = await supabase.storage.from('statements').upload(filename, file)

    if (error) {
      alert(error.message)
      return
    }

    // Call backend function
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = async () => {
      const res = await fetch('/.netlify/functions/parse-pdf', {
        method: 'POST',
        body: reader.result
      })
      const data = await res.json()
      setResults(data.transactions)
      console.log(data)
    }
  }

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload PDF</button>

      {results && <pre>{JSON.stringify(results, null, 2)}</pre>}
    </div>
  )
}
