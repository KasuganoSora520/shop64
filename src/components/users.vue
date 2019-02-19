<template>
  <el-card class="box">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">用户管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="warning">添加用户</el-button>
    </div>
    <el-table :data="list" height="250" border style="width: 100%" class="users-table">
      <el-table-column prop="id" label="#" width="80"></el-table-column>
      <el-table-column prop="username" label="用户" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="mobile" label="电话" width="180"></el-table-column>
      <el-table-column prop="create_time" label="创建日期" width="180"></el-table-column>
      <el-table-column prop="name" label="用户状态" width="180">
        <el-switch
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="changeusers()"
        ></el-switch>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <el-button type="primary" icon="el-icon-edit" circle size="mini" :plain="true"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle size="mini" :plain="true"></el-button>
        <el-button type="success" icon="el-icon-check" circle size="mini" :plain="true"></el-button>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="6"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      value1: "true",
      value2: "",
      query: "",
      input5: "",
      total: -1,
      length: this.length,
      list: [],
      currentPage4: 1,
      pagenum: 1,
      pagesize: 6
    };
  },
  created() {
    this.getTabledata();
  },
  methods: {
    async getTabledata() {
      const AUTH_TOKEN = localStorage.getItem("token");
      this.$http.defaults.headers.common["Authorization"] = AUTH_TOKEN;
      const res = await this.$http.get(
        `users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${
          this.pagesize
        }`
      );
      // console.log(res);
      const {
        data,
        meta: { msg, status }
      } = res.data;
      if (status === 200) {
        this.total = data.total;
        this.list = res.data.data.users;
        // console.log(this.list);
      }
    },
    handleSizeChange(val) {
      console.log(`当前${val}页`);
    },
    handleCurrentChange(val) {
      console.log(`当前页${val}页`);
    },
    async changeusers(user) {
      const res = await this.$http.put(
        `users/${user.id}/state/${user.mg_state}`
      );
    },
    async edutUser() {
      const res = await this.$http.put(
        `users/${this.formdata.id}}`,
        this.formdata
      );
      const {
        data,
        meta: { msg, status }
      } = res.data;
      if (status === 200) {
        // this.total = data.total;
        // this.list = res.data.data.users;
        // console.log(this.list);
      }
    }
  }
};
</script>

<style>
.box {
  height: 100%;
}
.users-table {
  margin-top: 10px;
}
.input-with-select {
  width: 400px;
}
</style>
