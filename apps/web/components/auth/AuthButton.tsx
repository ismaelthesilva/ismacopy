'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { signOut, getCurrentUser } from '../../lib/auth-helpers'
import { User, LogOut } from 'lucide-react'

export default function AuthButton() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { user } = await getCurrentUser()
    setUser(user)
    setLoading(false)
  }

  const handleSignOut = async () => {
    await signOut()
    setUser(null)
    router.push('/auth/login')
  }

  if (loading) {
    return (
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
    )
  }

  if (!user) {
    return (
      <Button 
        onClick={() => router.push('/auth/login')}
        variant="outline"
        size="sm"
      >
        Sign In
      </Button>
    )
  }

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2 text-sm text-slate-600">
        <User className="h-4 w-4" />
        <span>{user.email}</span>
      </div>
      <Button 
        onClick={handleSignOut}
        variant="outline"
        size="sm"
        className="flex items-center space-x-1"
      >
        <LogOut className="h-4 w-4" />
        <span>Sign Out</span>
      </Button>
    </div>
  )
}
