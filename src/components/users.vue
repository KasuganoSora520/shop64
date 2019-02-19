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
    <el-table :data="list" height="250" border style="width: 100%" class="users-table" :align="center">
      <el-table-column prop="id" label="#" width="80" :align="center"></el-table-column>
      <el-table-column prop="username" label="用户" width="180" :align="center"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180" :align="center"></el-table-column>
      <el-table-column prop="mobile" label="电话" width="180" :align="center"></el-table-column>
      <el-table-column prop="create_time" label="创建日期" width="180" :align="center"></el-table-column>
      <el-table-column prop="name" label="用户状态" width="180" :align="center">
        <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-table-column>
      <el-table-column prop="address" label="操作" :align="center">
        <el-button type="primary" icon="el-icon-edit" circle size="mini" :plain="true"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle size="mini" :plain="true"></el-button>
        <el-button type="success" icon="el-icon-check" circle size="mini" :plain="true"></el-button>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="12"
        layout="total, sizes, prev, pager, next, jumper"
        :total="666"
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
      list: [],
      currentPage4: 1,
      pagenum: 1,
      pagesize: 2,
      handleSizeChange: "",
      handleCurrentChange: ""
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
      console.log(res);
      const {
        data,
        meta: { msg, status }
      } = res.data;
      if (status === 200) {
        this.list = res.data.data.users;
        console.log(this.list);
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
