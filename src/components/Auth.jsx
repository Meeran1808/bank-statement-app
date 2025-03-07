import { useState } from 'react'
import supabase from '../supabaseClient'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signup = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert(error.message)
    else alert('Check your email for confirmation!')
  }

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else alert('Logged in!')
  }

  return (
    <div>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={signup}>Sign Up</button>
      <button onClick={login}>Log In</button>
    </div>
  )
}
