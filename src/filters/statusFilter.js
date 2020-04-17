function statusFilter (status) {
  const options = {
    progress: 'В работе',
    expired: 'Просрочена',
    completed: 'Завершена'
  }

  return options[status]
}

export default statusFilter
