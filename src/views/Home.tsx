import { defineComponent, PropType } from 'vue';
export const Home = defineComponent({
  props: {
  },
  setup: (props, context) => {
    return () => (
      <div>home page</div>
    )
  }
})