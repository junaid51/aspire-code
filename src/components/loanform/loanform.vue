<template>
  <div class="loanform">
      <form class="form" @submit="submit" novalidate>
          <div class="form-input">
              <div class="group">
                  <div class="input">
                      <label for="email">Email</label>
                      <input type="email" maxlength="100" v-model="email" placeholder="someone@example.com">
                  </div>
                  <div class="input">
                      <label for="amount">Amount Required ($)</label>
                      <input type="number" name="amount" min="1000" v-model="loanAmount">
                  </div>
                  <div class="input">
                      <label for="term">Loan term (years)</label>
                      <input type="number" name="term" min="1" max="25" v-model="loanTerm">
                  </div>
              </div>
              <div class="info text-left">*Note: Amount to be repaid weekly</div>
              <button type="submit" class="btn">Apply</button>
          </div>
      </form>

  </div>
</template>

<script src="./loanform.js"></script>

<style lang="scss">
@import "./loanform.scss";
</style>