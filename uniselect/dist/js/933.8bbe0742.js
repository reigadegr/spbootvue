"use strict";(self["webpackChunkuniselect"]=self["webpackChunkuniselect"]||[]).push([[933],{933:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var a=n(3396),c=n(7139);function s(t,e,n,s,r,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Uk)(" 这一页仅仅用来测试 "),(0,a._)("p",null,(0,c.zw)(r.name),1)])}var r=n(1076),l={name:"Test",data(){return{name:""}},async created(){await this.fetchData("http://localhost:9090/uniselect/fid","id","2")},methods:{async fetchData(t,e,n){let a=t+"?"+e+"="+n;try{const t=await r.Z.get(a);console.log(t);const e=t.data;this.name=e.name}catch(c){console.error(c)}}}},u=n(89);const i=(0,u.Z)(l,[["render",s]]);var o=i}}]);
//# sourceMappingURL=933.8bbe0742.js.map