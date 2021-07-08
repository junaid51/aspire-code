export default {
  name: "Repayment",
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  components: {},
  data() {
    return {
      repayAmount: 1,
      loanRepaid: false,
    };
  },
  mounted() {
    console.log(this.user);
    this.loanRepaid = this.user.loanAmount <= 0;
  },
  methods: {
    submit(e) {
      e.preventDefault();
      if (!this.repayAmount) return;
      this.user.loanAmount -= this.repayAmount;
      this.loanRepaid = this.user.loanAmount <= 0;
      console.log(this.user);
      localStorage.setItem("user", JSON.stringify(this.user));
    },
    newLoan() {
      this.$emit("newloan", true);
    },
  },
  computed: {
    minDue() {
      const { loanAmount: amt, loanTerm: term } = this.user;
      const weeklyTerm = term * 52.14;
      const repay = amt / weeklyTerm;
      return Math.round(repay * 100) / 100;
    },
  },
};
