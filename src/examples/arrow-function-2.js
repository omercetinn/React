const { arguments } = require("commander");

const user = {
    name:'omercetin',
    email:'infoomercetin.com',
    city:'Malat',
    roles:['admin','customer'],
    getRoles:function(){
        this.roles.forEach((role)=>{
            console.log(role);
            console.log(this.name);
        })        
    }
}

user.getRoles();

const addES5 = function(a,b){
  let total = 0;
  for(let i=0;i<arguments.length;i++){
    total +=arguments[i];
  }

  return total;
}

const addEs6 = () =>{
    console.log(arguments);
}


console.log(addES5(5,10));
addEs6();