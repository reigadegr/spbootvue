"use strict";(self["webpackChunkuniselect"]=self["webpackChunkuniselect"]||[]).push([[241],{2241:function(t,s,e){e.r(s),e.d(s,{default:function(){return k}});var n=e(3396),l=e(9242);const o=(0,n._)("h1",null,"Let's Login!",-1),u=(0,n._)("h1",null,"学生登录",-1),r=(0,n._)("label",{for:"studentId"},"学号:",-1),i=(0,n._)("br",null,null,-1),d=(0,n._)("br",null,null,-1),a=(0,n._)("label",{for:"password"},"密码:",-1),c=(0,n._)("br",null,null,-1),p=(0,n._)("br",null,null,-1),h=(0,n._)("br",null,null,-1),g=(0,n._)("br",null,null,-1);function w(t,s,e,w,m,_){const b=(0,n.up)("el-button");return(0,n.wg)(),(0,n.iD)("div",null,[o,u,(0,n._)("form",{onSubmit:s[2]||(s[2]=(0,l.iM)(((...t)=>_.login&&_.login(...t)),["prevent"]))},[r,(0,n.wy)((0,n._)("input",{id:"studentId","onUpdate:modelValue":s[0]||(s[0]=t=>m.studentId=t),type:"text"},null,512),[[l.nr,m.studentId]]),i,d,a,(0,n.wy)((0,n._)("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=t=>m.password=t),type:"password"},null,512),[[l.nr,m.password]]),c,p,(0,n.Wm)(b,{type:"success",onClick:_.login},{default:(0,n.w5)((()=>[(0,n.Uk)("Login")])),_:1},8,["onClick"]),h,g],32),(0,n.Wm)(b,{type:"primary",onClick:_.goToRegister},{default:(0,n.w5)((()=>[(0,n.Uk)("去注册")])),_:1},8,["onClick"])])}e(560);var m=e(1076),_={name:"Login",data(){return{studentId:"",password:""}},methods:{async login(){this.$message.info("studentId: "+this.studentId),this.$message.info("Password: "+this.password);const t={student_id:this.studentId,password:this.password};await m.Z.post("http://localhost:9090/uniselect/login",t).then((t=>{console.log(t);const s=t.data;s?(this.$message.success("登录成功！"),localStorage.setItem("globalstdid",this.studentId),this.$router.push("/welcome")):this.$message.error("登录失败，请检查学号密码是否填写且正确！")})).catch((t=>{console.error(t)}))},goToRegister(){this.$router.push("/register")},goToWelcome(){this.$router.push("/welcome")}}},b=e(89);const f=(0,b.Z)(_,[["render",w]]);var k=f}}]);
//# sourceMappingURL=241.7ebe2e7d.js.map