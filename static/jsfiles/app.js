const store = new Vuex.Store({
  state: {
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
              <nav class="navbar navbar-expand-sm bg-dark navbar-dark" style="text-align:left;">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <button type="button" class="btn btn-dark nav-link" v-on:click="userlogin">User Login</button>
                        </li>
                        <li class="nav-item">
                          <button type="button" class="btn btn-dark nav-link" v-on:click="employeelogin">Employee Login</button>
                        </li>
                        <li class="nav-item">
                          <button type="button" class="btn btn-dark nav-link" v-on:click="adminlogin">Admin Login</button>
                        </li>  
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Link</a></li>
                            <li><a class="dropdown-item" href="#">Another link</a></li>
                            <li><a class="dropdown-item" href="#">A third link</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
    <br><br>
    This is Home Page</div>`
}

const adminlogin = {
  methods:{

  },
  template:`<div>
    <br><br><br><br><br>
    <div class="container-sm border rounded">
      <h2>Admin Login </h2>
        <label for="exampleFormControlInput1" class="form-label">Employee ID</label>
        <input class="form-control" id="exampleFormControlInput1"><br>
        <label for="exampleFormControlInput2" class="form-label">Password</label>
        <input class="form-control" id="exampleFormControlInput2"><br>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">Remember me</label><br><br>
        <button type="button" class="btn btn-primary">Submit</button><br><br>
      </div>
    </div>`
}

const employeelogin = {
  methods:{

  },
  template:`<div>
    <br><br><br><br><br>
    <div class="container-sm border rounded">
      <h2>Employee Login </h2>
        <label for="exampleFormControlInput3" class="form-label">Society Name</label>
        <input class="form-control" id="exampleFormControlInput3"><br>
        <label for="exampleFormControlInput1" class="form-label">Username</label>
        <input class="form-control" id="exampleFormControlInput1"><br>
        <label for="exampleFormControlInput2" class="form-label">Password</label>
        <input class="form-control" id="exampleFormControlInput2"><br>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">Remember me</label><br><br>
        <button type="button" class="btn btn-primary">Submit</button><br><br>
      </div>
    </div>`
}

const userlogin = {
  methods:{

  },
  template:`<div>
    <br><br><br><br><br>
    <div class="container-sm border rounded">
      <h2>User Login </h2>
        <label for="exampleFormControlInput3" class="form-label">Society Name</label>
        <input class="form-control" id="exampleFormControlInput3"><br>
        <label for="exampleFormControlInput1" class="form-label">Username</label>
        <input class="form-control" id="exampleFormControlInput1"><br>
        <label for="exampleFormControlInput2" class="form-label">Password</label>
        <input class="form-control" id="exampleFormControlInput2"><br>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">Remember me</label><br><br>
        <button type="button" class="btn btn-primary">Submit</button><br><br>
      </div>
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
    methods: {
    },
  })