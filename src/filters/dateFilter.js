function dateFilter (value) {
  return new Intl.DateTimeFormat('ru-Ru').format(new Date(value))
}

export default dateFilter
