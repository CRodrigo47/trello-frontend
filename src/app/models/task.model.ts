export type TaskList = Task[]

export interface Task{
  id: number
  title: string
  description: string
  status: string
  assignedToId: number
  createdById: number
  boardId: number
  createdAt: string
  updatedAt: string
}