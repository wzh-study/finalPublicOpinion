<template>
  <div>
    <div class="sidebar-title">
          配置事件与账号
    </div>
    <el-col :span="3.5" class="sidebar">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>民进党黑金政治</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">贿选票买贪腐</el-menu-item>
            <el-menu-item index="1-2">向财团靠拢</el-menu-item>
            <el-menu-item index="1-3">庆富百亿案</el-menu-item>
            <el-menu-item index="1-4">高层卷入诈骗案</el-menu-item>
            <el-menu-item index="1-5">选举费未经审计</el-menu-item>
            <el-menu-item index="1-6">行政院长接受贿赂</el-menu-item>
            <el-menu-item index="1-7">党务支出不明</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template #title>
            <i class="el-icon-menu"></i>
            <span>国民党主席改选</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">国民党主席改选</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template #title>
            <i class="el-icon-document"></i>
            <span>国会改革</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">立法院斗殴不止</el-menu-item>
            <el-menu-item index="3-2">改革法案三读</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template #title>
            <i class="el-icon-document"></i>
            <span>民进党能源政策不当</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">断电</el-menu-item>
            <el-menu-item index="4-2">电价上涨</el-menu-item>
            <el-menu-item index="4-3">核电重启</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="5">
          <template #title>
            <i class="el-icon-document"></i>
            <span>民众党面临危机</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">党主席深陷多案</el-menu-item>
            <el-menu-item index="5-2">柯文哲被检方传唤</el-menu-item>
            <el-menu-item index="5-3">民众党中央党部遭突袭搜查</el-menu-item>
            <el-menu-item index="5-4">柯文哲被正式羁押</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="6">
          <template #title>
            <i class="el-icon-document"></i>
            <span>蓝营内斗</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">马办执行长指责蓝营</el-menu-item>
            <el-menu-item index="6-2">蓝营丧失叙事权</el-menu-item>
            <el-menu-item index="6-3">蓝营2026地方选举恐失败</el-menu-item>
            <el-menu-item index="6-4">泛蓝流失到绿营</el-menu-item>
            <el-menu-item index="6-5">泛蓝阵营基本盘不稳</el-menu-item>
            <el-menu-item index="6-6">卢燕秀与朱立伦隔空对话</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="7">
          <template #title>
            <i class="el-icon-document"></i>
            <span>县市长选举</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1">台北市长多候选人造势</el-menu-item>
            <el-menu-item index="7-2">蒋万安有意不再竞选</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #f9f9f9; /* 可根据需要调整背景颜色 */
  height: 100vh; /* 占满整个页面高度 */
  margin-top:10px;
  overflow-y: auto; /* 内容超出时显示滚动条 */
}

.sidebar-title{
  background-color: #f5ae41;
  border-radius: 10px;
  height:50px;
  font-weight:bold;
  color:white;
  text-align:center;
  vertical-align:center;

  margin-top:2px;
  width:200px;
  display:flex;
  justify-content:center;
  align-items:center;
}

::v-deep .el-menu-item{
  font-size:12px;
  color:black !important;
  height:30px;
}
::v-deep .el-submenu .el-menu-item{
  height:30px;
}
::v-deep .el-submenu__title{
  font-size:12px;
  color:black !important;
  width:200px;
  height:45px;
}
</style>
