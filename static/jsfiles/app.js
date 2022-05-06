const store = new Vuex.Store({
  state: {
    adminusername:5,
    userusername:5,
    employeeusername:5,
    key:5,
  },
  mutations: {

  }
})

const homepage = {
  methods:{
    adminlogin: function(){
      console.log(1111)
      this.$router.push('/adminlogin')
    },
    userlogin: function(){
      console.log(1111)
      this.$router.push('/userlogin')
    },
    employeelogin: function(){
      console.log(1111)
      this.$router.push('/employeelogin')
    },
  },
  template:`<div>    
    <br><br>
    This is Home Page</div>`
}

const adminlogin = {
  data: function() {
    return {adminusername:"",
            adminpassword:"",
          }
        },
  methods:{
    submit: async function(){
      if(this.adminusername=="" || this.adminpassword==""){
        alert("The Username and password should not be blank");
      }
      else if(this.adminusername.search('/') != -1 || this.adminpassword.search('/') != -1){
        alert("The Username and Password should not contain '/' character");
      }
      else{
        url="/api/adminlogin/"+this.adminusername+"/"+this.adminpassword;
        a= await fetch(url);
        response=await a.json();
        if(response.key){
          console.log("DONE")
        }
        else{
          console.log("NOT AVAILABLE")
        }
      }
    }
  },
  template:`<div>

    <br><br><br><br><br>
    <div class="container-sm border rounded">
      <h2>Admin Login </h2>
        <label for="exampleFormControlInput1" class="form-label">Username</label>
        <input class="form-control" id="exampleFormControlInput1" v-model="adminusername"><br>
        <label for="exampleFormControlInput2" class="form-label">Password</label>
        <input class="form-control" id="exampleFormControlInput2" v-model="adminpassword"><br>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">Remember me</label><br><br>
        <button type="button" class="btn btn-primary" v-on:click="submit">Submit</button><br><br>
      </div>
    </div>`
}

const employeelogin = {
  data: function() {
    return {employeeid:"",
            employeepassword:"",
            societyname:"",
          }
        },
  methods:{
    submit: async function(){

    }
  },
  template:`<div>
    <br><br><br><br><br>
    <div class="container-sm border rounded">
      <h2>Employee Login </h2>
        <label for="exampleFormControlInput3" class="form-label">Society Name</label>
        <input class="form-control" id="exampleFormControlInput3" v-model="societyname"><br>
        <label for="exampleFormControlInput1" class="form-label">Employee ID</label>
        <input class="form-control" id="exampleFormControlInput1" v-model="employeeid"><br>
        <label for="exampleFormControlInput2" class="form-label">Password</label>
        <input class="form-control" id="exampleFormControlInput2" v-model="employeepassword"><br>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">Remember me</label><br><br>
        <button type="button" class="btn btn-primary" v-on:click="submit">Submit</button><br><br>
      </div>
    </div>`
}

const userlogin = {
  data: function() {
    return {userusername:"",
            userpassword:"",
            societyname:"",
          }
        },
  methods:{
    submit: async function(){

    }
  },
  template:`<div>
    <br><br><br><br><br>
    <div class="container-sm border rounded">
      <h2>User Login </h2>
        <label for="exampleFormControlInput3" class="form-label" >Society Name</label>
        <input class="form-control" id="exampleFormControlInput3" v-model="societyname"><br>
        <label for="exampleFormControlInput1" class="form-label">Username</label>
        <input class="form-control" id="exampleFormControlInput1" v-model="userusername"><br>
        <label for="exampleFormControlInput2" class="form-label">Password</label>
        <input class="form-control" id="exampleFormControlInput2" v-model="userpassword"><br>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">Remember me</label><br><br>
        <button type="button" class="btn btn-primary" v-on:click="submit">Submit</button><br><br>
      </div>
    </div>`
}

const adminpage = {
  data: function() {
    return {
          }
        },
  methods:{

  },
  template:`<div>
    ADMIN PAGE
    </div>`
}

const employeepage = {
  data: function() {
    return {
          }
        },
  methods:{

  },
  template:`<div>
    ADMIN PAGE
    </div>`
}

const userpage = {
  data: function() {
    return {
          }
        },
  methods:{

  },
  template:`<div>
    ADMIN PAGE
    </div>`
}

const routes = [
{path :'/', name: 'home', component: homepage},
{path :'/adminlogin', name: 'adminlogin', component: adminlogin},
{path :'/userlogin', name: 'userlogin', component: userlogin},
{path :'/employeelogin', name: 'employeelogin', component: employeelogin},
]

const router = new VueRouter({
  routes:routes,
  base: '/',
})

let app = new Vue({
    el: '#app',
    data: {
    },
    router:router,
    store:store,
    methods:{
    adminlogin: function(){
      this.$router.push('/adminlogin')
    },
    userlogin: function(){
      this.$router.push('/userlogin')
    },
    employeelogin: function(){
      this.$router.push('/employeelogin')
    },
  },
  })