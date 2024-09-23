<template>
  <header class="header">
    <div class="header-content">
      <a href="/">
        <img class="logo" src="../../assets/logo-healme.png" alt="Logo" />
      </a>
      <h1>{{ $t('header.welcome') }}</h1>
      <img class="profile-pic" src="../../assets/profile-pic.png" alt="Profile" />
      <LanguageSwitcher />
    </div>
  </header>
</template>

<script>
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.vue';

export default {
  components: {
    LanguageSwitcher
  }
}
</script>

<style scoped>
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 150px;
}

.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>

