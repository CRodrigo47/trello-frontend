export type BoardList = Board[]

export interface Board {
  id: number
  name: string
  description: string
  userIds: number[]
  taskIds: number[]
  createdById: number
}
