import { defineComponent, PropType } from 'vue';

export const NotFound = defineComponent({
  props: {
  },
  setup: (props, context) => {
    return () => (
      <div>not found page</div>
    )
  }
})