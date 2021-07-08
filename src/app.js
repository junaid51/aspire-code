import Header from "@/components/header/header.vue";
import Loanform from "@/components/loanform/loanform.vue";
import Admin from "@/components/admin/admin.vue";
import Repayment from "@/components/repayment/repayment.vue";

export default {
  name: "App",
  components: { Header, Loanform, Admin, Repayment },
  data() {
    return {
      user: undefined,
      approved: false,
    };
  },
  mounted() {
    const data = localStorage.getItem("user");
    if (data) {
      this.user = JSON.parse(data) || undefined;
      this.approved = this.user.approved;
    }
  },
  methods: {
    setUser(e) {
      console.log(e);
      this.user = e;
    },
    setApproved() {
      this.user.approved = true;
      this.approved = true;
      localStorage.setItem("user", JSON.stringify(this.user));
    },
    initNewLoan() {
      this.setUser(undefined);
      localStorage.removeItem("user");
    },
  },
};
