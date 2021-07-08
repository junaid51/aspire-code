export default {
  name: "Admin",
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    approve() {
      this.$emit("approve", true);
    },
  },
};
