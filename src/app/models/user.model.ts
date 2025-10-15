export type UserList = User[]

export interface User {
  id: number
  username: string
  role: 'USER'
  boardIds: number[]
  taskIds: number[]
}
