<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Girassol&family=KoHo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Chela+One&family=Girassol&family=Permanent+Marker&family=Texturina:wght@500&family=Ubuntu&display=swap');
#app {
  font-family: 'KoHo', sans-serif;
}
.btn, a {
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
  color: #fff;
  margin-left: 5px;
  text-decoration: none;
}
.btn-showPollForm {
  background: blue;
}
.btn-cancel {
  background: red;
}
.btn-create-poll {
  background: rgb(2, 161, 108);
}
.btn-cancel, .btn-create-poll {
  width: 48%;
}
.btn-clearAll{
  width: 100%;
  background: red;
}
.btn-vote {
  background: rgb(22, 22, 22);
}
.btn-results {
  background: rgb(33, 202, 84);
}
.btn-cast-vote {
  background: rgb(22, 22, 122);
  width: 30%;
}
.btn-back-polls-vote {
  background: blue;
  width: 30%;
}
.btn-back-polls {
  background: blue;
  width: 20%;
}
.btn-vote-again {
  background: #000;
  width: 20%;
}
</style>
