import { useState } from 'react'
import supabase from '../supabaseClient'

export default function PDFUpload() {
  const [file, setFile] = useState(null)

  const handleUpload = async () => {
    const user = (await supabase.auth.getUser()).data.user
    if (!user) return alert('Please log in first!')

    const filename = `${user.id}/${Date.now()}-${file.name}`
    const { error } = await supabase.storage.from('statements').upload(filename, file)
    
    if (error) alert(`Upload error: ${error.message}`)
    else alert('Uploaded successfully!')
  }

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload PDF</button>
    </div>
  )
}
