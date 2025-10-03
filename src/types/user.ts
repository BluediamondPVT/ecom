export interface User {
  id: string
  email: string
  name: string
  role: 'customer' | 'admin'
  phone?: string
  avatar?: string
  createdAt: Date
}
