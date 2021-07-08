<template>
  <div class="admin">
    <div class="loan-details">
      Please approve a loan amount of <strong class="amount">${{user.loanAmount}}</strong> <br />
      to user <strong class="name">{{user.email}}</strong>
      for a term of <strong class="term">{{user.loanTerm}} years</strong>
    </div>
      <button type="button" class="btn" @click="approve">Approve Loan</button>
  </div>
</template>

<script src="./admin.js"></script>

<style lang="scss">
@import "./admin.scss";
</style>