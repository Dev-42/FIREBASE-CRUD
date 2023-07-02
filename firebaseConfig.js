// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getDatabase , ref , set ,update,remove} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAcHnmoIsEX0xELOcVO1yA3jnPrAcnxRcs",
    authDomain: "crud-30a73.firebaseapp.com",
    projectId: "crud-30a73",
    storageBucket: "crud-30a73.appspot.com",
    messagingSenderId: "222099070205",
    appId: "1:222099070205:web:3a69e420a9f415ca65b294"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app)

let rollV,nameV,genderV,addressV;

function readForm(){
    rollV = document.getElementById('roll').value
    nameV = document.getElementById('name').value
    genderV = document.getElementById('gender').value
    addressV = document.getElementById('address').value
}
// insert data
document.getElementById('insert').addEventListener('click',function(e){
    e.preventDefault()
    readForm()
    set(ref(db,'student/'+rollV),{
        rollNo : rollV,
        name: nameV,
        gender : genderV,
        address : addressV,
    })
    alert("Data Set Succesfully")
    document.getElementById('roll').value = "";
    document.getElementById('name').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('address').value = "";
})

// Update data in firebase
document.getElementById('update').addEventListener('click',function(e){
    e.preventDefault()
    readForm()
    update(ref(db,'student/' + rollV),{
        roll: rollV,
        name: nameV,
        gender : genderV,
        address : addressV,
    })
    alert("Data Updated")
    document.getElementById('roll').value = "";
    document.getElementById('name').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('address').value = "";
})

// Delete data from firebase
document.getElementById('delete').addEventListener('click',function(e){
    e.preventDefault()
    readForm()

    remove(ref(db,'student/'+rollV))
    alert("Data Deleted")
    document.getElementById('roll').value = "";
    document.getElementById('name').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('address').value = "";
})

// Read/Getting data from FireBase





