import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, email, password, name } = body

    if (action === 'login') {
      // Mock login logic - replace with real database query
      if (email === 'admin@test.com' && password === 'admin123') {
        return NextResponse.json({
          user: { id: '1', email, name: 'Admin', role: 'admin' }
        })
      } else if (email === 'user@test.com' && password === 'user123') {
        return NextResponse.json({
          user: { id: '2', email, name: 'User', role: 'customer' }
        })
      }
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
    }

    if (action === 'register') {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10)
      
      // Save to database (mock)
      const user = { id: Date.now().toString(), email, name, password: hashedPassword }
      
      return NextResponse.json({ message: 'User registered successfully', user })
    }

    if (action === 'forgot-password') {
      // Send password reset email (mock)
      return NextResponse.json({ message: 'Password reset link sent' })
    }

    return NextResponse.json({ message: 'Invalid action' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
