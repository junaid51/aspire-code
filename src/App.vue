<template>
  <div id="app">
    <Header />
    <Loanform v-if="!user" @userFunc="setUser" />
    <Admin :user="user" @approve="setApproved" v-if="user && !approved" />
    <Repayment :user="user" @newloan="initNewLoan"  v-if="user && approved" />
  </div>
</template>

<script src="./app.js"></script>

<style lang="scss">
@import "./app.scss";
</style>