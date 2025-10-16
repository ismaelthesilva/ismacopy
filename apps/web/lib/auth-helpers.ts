'use client'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if Supabase is configured
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey && 
  supabaseUrl !== 'https://your-project-id.supabase.co' && 
  supabaseAnonKey !== 'your-anon-key-here'

// Create a dummy client for development if not configured
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : createClient('http://localhost:54321', 'dummy-key')

export async function signInWithEmail(email: string, password: string) {
  if (!isSupabaseConfigured) {
    console.warn('Supabase not configured - returning mock data for development')
    return { 
      data: { user: null, session: null }, 
      error: { message: 'Supabase not configured for development' } 
    }
  }
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export async function signUpWithEmail(email: string, password: string) {
  if (!isSupabaseConfigured) {
    console.warn('Supabase not configured - returning mock data for development')
    return { 
      data: { user: null, session: null }, 
      error: { message: 'Supabase not configured for development' } 
    }
  }
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  return { data, error }
}

export async function signOut() {
  if (!isSupabaseConfigured) {
    console.warn('Supabase not configured - returning mock data for development')
    return { error: null }
  }
  
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function getCurrentUser() {
  if (!isSupabaseConfigured) {
    return { user: null, error: null }
  }
  
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}
