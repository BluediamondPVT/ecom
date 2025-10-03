export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  shippingInfo: ShippingInfo
  createdAt: Date
}

export interface OrderItem {
  productId: string
  name: string
  price: number
  quantity: number
}

export interface ShippingInfo {
  name: string
  email: string
  address: string
  city: string
  zipCode: string
  phone: string
}
