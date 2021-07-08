<template>
  <div class="repayment text-center">
        <div class="welcome">Welcome {{user.email}}</div>
      <form v-if="!loanRepaid" class="form" @submit="submit" novalidate>
          <div class="form-input">
              <div class="group">
                  <div class="input">
                      <label for="amount">Amount ($)</label>
                      <input type="number" name="amount" min="1" v-model="repayAmount">
                  </div>
              </div>
              <div class="info text-left">Payment frequency: Weekly</div>
              <div class="info text-left">Pending Amount: {{user.loanAmount}}</div>
              <div class="info text-left">Minimum weekly amount due: {{minDue}}</div>
              <button type="submit" class="btn">Repay</button>
          </div>
      </form>
      <div v-if="loanRepaid" class="repaid-successfully">Loan Repaid Successfully</div>
      <button v-if="loanRepaid" @click="newLoan" type="button" class="btn">Apply for a new loan</button>
  </div>
</template>

<script src="./repayment.js"></script>

<style lang="scss">
@import "./repayment.scss";
</style>