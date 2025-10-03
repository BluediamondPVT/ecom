import { NextRequest, NextResponse } from 'next/server'

const orders: any[] = []

export async function GET(request: NextRequest) {
  return NextResponse.json(orders)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const newOrder = {
      id: Date.now().toString(),
      ...body,
      status: 'pending',
      date: new Date().toISOString(),
      total: body.items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0)
    }
    
    orders.push(newOrder)
    
    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create order' }, { status: 500 })
  }
}
