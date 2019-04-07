<template>
  <div id="app">
    <div class="box">
      <div class="contain">
        <div class="nav">
          <router-link class="nav-link" to="/" tag="div">/</router-link>
          <router-link class="nav-link" to="/foo" tag="div">foo</router-link>
          <router-link class="nav-link" to="/bar" tag="div">bar</router-link>
        </div>
        <div class="main">
          <transition :name="transitionName">
            <router-view class="child-view"></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
  name: 'app',
    data() {
      return{
        transitionName: ''
      }
    },
    watch: {
      '$route'(to, from) {
        //如果to索引大于from索引,判断为前进状态,反之
        if (to.meta.index > from.meta.index) {
          this.transitionName = 'slide-left';
        } else {
          this.transitionName = 'slide-right';
        }
      }
    },
}
</script>

<style>
  .box {
    width: 375px;
    height: 667px;
    border: 1px solid #222;
    margin: 0 auto;
    border-radius: 16px;
  }

  .contain {
    width: 340px;
    height: 600px;
    border: 1px solid #222;
    margin: 20px auto 0 auto;
    display: flex;
    flex-direction: column;
  }

  .nav {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
  }

  .nav .nav-link {
    line-height: 40px;
    border: 1px solid #222;
    flex-grow: 1;
    text-align: center;
    cursor: pointer;
  }
  .nav .nav-link.router-link-exact-active{
    background-color:#ccc;
  }
  .main {
    flex-grow: 1;
    overflow: hidden;
    position: relative;
  }
  .login,.home,.user{
    width:100%;
    height:100%;
    position:absolute;
  }
  .login{
    background-color:red;
  }
  .home{
    background-color:green;
  }
  .user{
    background-color:pink;
  }


  /*路由切换动画*/
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .main section{
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>
