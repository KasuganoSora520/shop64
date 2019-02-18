<template>
  <div id="app">
    <el-form label-position="top" label-width="80px" :model="formdata" class="dl-form">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="handleLogin()" type="danger" round class="dl-btn">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      formdata: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handleLogin() {
      this.$http.post(`login`, this.formdata).then(res => {
        console.log(res);
        const {
          data: {
            data,
            meta: { msg, status }
          }
        } = res;
        if (status === 200) {
          localStorage.setItem("token", data.token);
          this.$message.success(msg);
          this.$router.push({
            name: "home"
          });
        } else {
          this.$message.error(msg);
        }
      });
      // const res = await this.$http.post(`login`, this.formdata);
      // const {
      //   data: {
      //     data: { token },
      //     meta: { msg, status }
      //   }
      // } = res;
      // console.log(res);
      // localStorage.setItem("token", token);
      // if (status === 200) {
      //   this.$message.success(msg);
      //   this.$router.push({
      //     name: "home"
      //   });
      // } else {
      //   this.$message.error(msg);
      // }
    }
  }
};
</script>

<style>
#app {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dl-form {
  background-color: #fff;
  border-radius: 5px;
  width: 400px;
  padding: 30px;
}
.dl-btn {
  width: 100%;
}
</style>
