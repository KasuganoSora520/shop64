<template>
  <el-container class="container">
    <el-header>
      <el-row class="home-head">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../assets/logo.png" alt="图片加载失败">
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            <h2 class="home-h2">黑马前端程序员</h2>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a href="#" @click.prevent="goout()">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-col :span="12">
          <el-menu :unique-opened="true" default-active="2" :router="true" class="el-menu-vertical-demo">
            <!-- @open="handleOpen"
            @close="handleClose"-->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="users">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <i class="el-icon-menu"></i>角色列表
                </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="1-1" text-color>
                  <i class="el-icon-menu"></i>权限列表
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <i class="el-icon-menu"></i>商品列表
                </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <i class="el-icon-menu"></i>分类参数
                </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="1-1" text-color>
                  <i class="el-icon-menu"></i>商品分类
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <i class="el-icon-menu"></i>订单列表
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <i class="el-icon-menu"></i>数据报表
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  beforeMount() {
    if (!localStorage.getItem("token")) {
      this.$message.warning("请重新登录！");
      this.$router.push({
        name: "login"
      });
    }
  },
  methods: {
    goout() {
      localStorage.clear();
      this.$router.push({
        name: "login"
      });
      this.$message.warning("请重新登录！");
    }
  }
};
</script>

<style>
.container {
  height: 100%;
  background-color: #b3c0d1;
}
.aside {
  background-color: #d3dce6;
}
.main {
  width: 100%;
  background-color: #e9eef3;
}
.grid-content {
  text-align: center;
  line-height: 60px;
}
.aside {
  width: 400px;
}
.el-menu-vertical-demo {
  width: 200px;
}
.home-h2 {
  color: #ffffff;
}
.home-head {
  text-align: center;
}
</style>
