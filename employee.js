class Employee{
    constructor(first_name,last_name,email,company,address,dob){
        this.first_name=first_name;
        this.last_name=last_name;
        this.email=email;
        this.company=company;
        this.address=address;
        this.dob=dob;
    }
    output(){
       return`
            <tr>
                <td>${this.first_name}</td>
                <td>${this.last_name}</td>
                <td>${this.email}</td>
                <td>${this.company}</td>
                <td>${this.address}</td>
                <td>${this.dob}</td>
            </tr>
        `;
    }
}

const btnSubmit=document.getElementById('submit');
const f_name=document.getElementById('first_name');
const l_name=document.getElementById('last_name');
const email=document.getElementById('email');
const company=document.getElementById('company');
const address=document.getElementById('address');
const dob=document.getElementById('dob');
const tbody=document.getElementById('tbody');

// ES6
btnSubmit.onclick=()=>{
  var emp=new Employee(f_name.value,l_name.value,email.value,company.value,address.value,dob.value);
   tbody.innerHTML+=emp.output();
   document.querySelector('form').reset();
}