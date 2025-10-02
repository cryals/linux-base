// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import DistroTest from './DistroTest.vue';
import DETest from './DETest.vue';
import 'vitepress-markdown-timeline/dist/theme/index.css';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app }) {
    app.component('DistroTest', DistroTest);
    app.component('DETest', DETest);
  }
} satisfies Theme;
