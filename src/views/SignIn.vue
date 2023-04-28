<template>
    <div id="signin">
        <h1 class="title"><span>!</span>Moviess</h1>
        <div class="form-data">
            <div class="form-container">
                <h1>Sign In</h1>
                <input placeholder="Email" v-model="email" @change="(e) => email = e.target.value"  />
                <input placeholder="password" v-model="password" type="Password" @change="(e) => password = e.target.value" />
                <button @click="signIn">Sign In</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignIn',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signIn() {
            if (this.email === 'admin@mail.com' && this.password === 'secret') {
                localStorage.setItem('user', this.email)
                this.$router.push('/');
            }
        }
    }
}
</script>

<style scoped>

body {
    margin: 0;
    padding: 0;
}

#signin {
    margin: 0;
    padding-top: 120px;
    padding-bottom: 20px;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}

#signin h1 {
    color: lightgray;
}

.title {
  font-size: 3rem;
}

.title span {
  color: #f59e0b;
  font-size: 3.4rem;
}

.form-data {
    display: flex;
    justify-content: center;
    width: 100%;
    /* background-color: antiquewhite; */
}

.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    gap: 32px;
    /* background-color: aqua; */
    background-color: #1f2937;
    width: 40%;
    padding: 20px 0px;
    border-radius: 8px;
}

@media screen and (max-width: 1000px) {
    .form-container {
        width: 70%;
    }
}

.form-data input {
   width: 60%;
   height: 40px;
   padding-left: 20px;
   background-color: white;
   border: 1px solid lightgray;
   border-radius: 8px;
}

.form-data input:focus {
   outline: none;
}

.form-data button {
  height: 40px;
  width: 80px;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: #f59e0b;
  color: white;
  font-weight: bold;
  margin: 20px 0px;
  transition: 0.2s ease-in-out;
}

.form-data button:hover {
    transform: translateY(-8px);
    cursor: pointer;
}

</style>