import GenericService from './GenericService'

class TaskService extends GenericService {
  constructor() {
    super()
    this.url = `${this.baseUrl}/tasks`
  }

  getAll() {
    return this.get(this.url)
  }

  getById(id) {
    return this.get(`${this.url}/${id}`)
  }

  create(task) {
    return this.post(this.url, task)
  }

  update(task) {
    return this.put(`${this.url}/${task.id}`, task)
  }

  delete(id) {
    return this.delete(`${this.url}/${id}`)
  }
}

export default new TaskService()
