import DefaultTheme from 'vitepress/theme'
import Quiz from './components/Quiz.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Quiz', Quiz)
  }
}
