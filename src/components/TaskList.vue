<template>
  <div class="tasklist pt-4 pt-4">
    <a
      v-for="(task, index) in tasks"
      :key="`${task}_${index}`"
      href="#"
      class="task mb-2 p-3"
    >
      <span class="task__title">{{ task.title }}</span>
      <div class="task__info">
        <span class="task__date">{{ task.date | date }}</span>
        <em class="task__status">{{ task.status | status }}</em>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tasks: [
        {
          id: 1,
          title: 'Первая задача',
          date: new Date(2020, 7, 7),
          status: 'progress'
        },
        {
          id: 2,
          title: 'Вторая задача',
          date: new Date(2020, 3, 7),
          status: 'expired'
        },
        {
          id: 3,
          title: ' Третья задача',
          date: new Date(2020, 2, 6),
          status: 'completed'
        }
      ]
    }
  }
}
</script>

<style lang="less">
  .task {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #2c3e50;
    box-shadow: 0 0 2px 0 rgba(50, 50, 50, 0.75);
    transition: all 0.3s;
    border: 1px solid #808890;
    border-radius: 0.25rem;
    background: #f5f5f5;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 0 4px 0 rgba(50, 50, 50, 0.75);
      text-decoration: none;
      color: #2c3e50;
    }

    &__title {
      text-align: left;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      width: 200px;
    }
  }
</style>
