<template>
  <div>
    <div>
      <h1>北城选课系统</h1>
      <nav>
        <div class="navdiv">
          <el-button type="primary" @click="goToWelcome">回到首页</el-button>
          <el-button type="primary" @click="goToSelectCourse"
            >课程管理</el-button
          >
          <el-button type="primary" @click="goToAlreadySelect"
            >查看学生已选</el-button
          >
          <el-button type="primary" @click="goToCourseLayout"
            >增加课程</el-button
          >
          <el-button type="primary" @click="goToNowUserInfo"
            >个人信息</el-button
          >
          <el-button type="primary" @click="goToAddNewStu">添加学生</el-button>
        </div>
      </nav>
      <p class="welcome">
        欢迎您：<span>{{ globalstdid }}</span>
      </p>
      <p class="welcome">您是辛勤的教师！</p>
    </div>
    <div class="recommendations">
      <div class="recommendation">
        <img alt="" src="@/images/default_course_img.jpg" />
        <h2>最热门课程</h2>
        <p>原神中合理进行线程放置的重要性</p>
      </div>
      <div class="recommendation">
        <img alt="" src="@/images/en.jpg" />
        <h2>最新课程</h2>
        <p>DRAM空间不足，频率过低对于崩坏-星穹铁道的影响</p>
      </div>
      <div class="recommendation">
        <img alt="" src="@/images/dataStructure.jpg" />
        <h2>最受欢迎的课程</h2>
        <p>高负载游戏中，替代schedutil调速器基于帧时间的CPU调频方案</p>
      </div>
    </div>
    <div class="logout">
      <a href="/uniselect/login" @click.prevent="logout">退出登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      globalstdid: "",
    };
  },
  mounted() {
    this.globalstdid = localStorage.getItem("globalstdid");
  },
  methods: {
    logout() {
      localStorage.setItem("globalstdid", "");
      this.$router.push('/'); // 使用 Vue Router 的 push 方法进行跳转
    },
    goToWelcome() {
      this.$router.push('/welcometeacher'); // 跳转到教师欢迎页面
    },
    goToSelectCourse() {
      this.$router.push('/selectcourseteacher'); // 跳转到教师选课页面
    },
    goToAlreadySelect() {
      this.$router.push('/alreadyselectteacher'); // 跳转到教师已选课程页面
    },
    goToCourseLayout() {
      this.$router.push('/courselayoutteacher'); // 跳转到教师课程表页面
    },
    goToNowUserInfo() {
      this.$router.push('/nowuserinfteacher'); // 跳转到教师个人信息页面
    },
    goToAddNewStu() {
      this.$router.push('/register'); // 跳转到注册页面
    },
  },
};
</script>
<style>
body {
  background-image: url("@/images/teacher.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 20px;
}

.recommendations {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}

.recommendation {
  width: 30%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.recommendation:hover {
  transform: translateY(-5px);
}

.recommendation img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.recommendation h2 {
  padding: 10px;
  font-size: 24px;
  color: #333;
}

.recommendation p {
  padding: 10px;
  font-size: 16px;
  color: #666;
}

.search {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search input[type="text"] {
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 300px;
}

.search input[type="submit"] {
  background-color: #bd8e05;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.search input[type="submit"]:hover {
  background-color: #878a05;
}

.logout {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logout a {
  text-decoration: none;
  background-color: #ff6f61;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.logout a:hover {
  background-color: #f35449;
}

.navdiv {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navdiv a {
  text-decoration: none;
  background-color: #1a7ec5;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.navdiv a:hover {
  background-color: #4957f3;
}
</style>
