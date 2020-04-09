function statusFilter (status) {
  const options = {
    progress: 'В работе',
    expired: 'Просрочен',
    completed: 'Завершен'
  }

  return options[status]
}

export default statusFilter
