<template>
  <section>
    <slot />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: var(--page-height);
}
</style>
