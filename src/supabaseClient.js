import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://djsnqurzdsviuhdjuaew.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqc25xdXJ6ZHN2aXVoZGp1YWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMzYxMTIsImV4cCI6MjA1NjkxMjExMn0.Q2curmqJh9QJA6fDLYYFBKANKpiCjWrWyuy7zMBHHmc'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
