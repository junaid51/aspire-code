export default {
  name: "Loanform",
  components: {},
  data() {
    return {
      email: "",
      loanAmount: 1000,
      loanTerm: 20,
      user: undefined,
    };
  },
  mounted() {},
  methods: {
    submit(e) {
      e.preventDefault();
      if (!this.email || !this.loanAmount || !this.loanTerm) {
        console.log("error");
        return;
      }
      console.log("submitted");
      const data = {
        email: this.email,
        loanAmount: this.loanAmount,
        loanTerm: this.loanTerm,
      };
      localStorage.setItem("user", JSON.stringify(data));
      this.$emit("userFunc", data);
    },
  },
};
