<template>
  <div class="Author my-3">
    <h4>Made with love 😊❤💯, @Am.Chris.</h4>
    <div class="m-2">
      <a href="https://www.facebook.com/people/Humble-Chris/100011196098630/">
        <font-awesome-icon :icon="['fab', 'facebook-square']" class="icon"/>
      </a>
      <a href="https://github.com/DevHumbleChris">
        <font-awesome-icon :icon="['fab', 'github-square']" class="icon"/>
      </a>
      <a href="https://twitter.com/AmChrisKE">
        <font-awesome-icon :icon="['fab', 'twitter-square']" class="icon"/>
      </a>
      <a href="https://www.linkedin.com/in/christopher-odhiambo-2870331aa/">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="icon"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Author'
}
</script>

<style>
.Author {
  text-align: center;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  color: white;
}
.icon {
  font-size: 40px;
}
</style>
