
<template>
  <v-container>
    <div class="grid_menu_img">
        <span class="menu_img1">
          <img v-bind:src="first_i_link">
        </span>
        <span class="menu_img2">
          <img v-bind:src="first_i_link">
        </span>
        <span class="menu_img3">
          <img v-bind:src="first_i_link">
        </span>
        <span class="menu_img4">
          <img v-bind:src="first_i_link">
        </span>
      </div>

      <div class="weekly_best">
        <div class="big_img">
          <img v-bind:src="link">
        </div>
        <div class="clothes">
          <span class="container">
            <img v-bind:src="link">
            name
            value
          </span>
          <img v-bind:src="link">
          <img v-bind:src="link">
          <img v-bind:src="link">
          <img v-bind:src="link">
          <img v-bind:src="link">
          <img v-bind:src="link">
          <img v-bind:src="link">
        </div>
      </div>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>

