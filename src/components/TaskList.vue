<template>
  <div class="tasklist pt-4 pt-4">
    <router-link
      v-for="(task, index) in tasks"
      :key="`${task.title}_${index}`"
      :to="{
        name: 'singletask',
        params: {
          id: task.id,
          title: task.title,
          date: task.date,
          status: task.status,
          text: task.text
        }
      }"
      class="tasklist__item mb-2 p-3"
    >
      <span class="tasklist__title">{{ task.title }}</span>
      <div class="tasklist__info">
        <span class="tasklist__date">{{ task.date | date }}</span>
        <em class="tasklist__status">{{ task.status | status }}</em>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  props: {
    tasks: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="less">
  .tasklist {
    &__item {
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

      @media (max-width: 992px) {
        flex-direction: column;
      }
    }

    &__title {
      text-align: left;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      width: 200px;

      @media (max-width: 992px) {
        width: 100%;
      }
    }
  }
</style>
