let rollV,nameV,genderV,addressV;

function readForm(){
    rollV = document.getElementById('roll').value
    nameV = document.getElementById('name').value
    genderV = document.getElementById('gender').value
    addressV = document.getElementById('address').value
}

document.getElementById('insert').addEventListener('click',function(){
    readForm()

    firebase.database().ref('student/' + rollV).set({
        rollNo : rollV,
        name: nameV,
        gender : genderV,
        address : addressV,
    });
    alert("Data Inserted")
    document.getElementById('roll').value = "";
    document.getElementById('name').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('address').value = "";
})
// Update data in firebase
document.getElementById('update').addEventListener('click',function(){
    readForm()

    firebase.database().ref('student/' + rollV).update({
        // rollNo : rollV,
        name: nameV,
        gender : genderV,
        address : addressV,
    });
    alert("Data Updated")
    document.getElementById('roll').value = "";
    document.getElementById('name').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('address').value = "";
})
// Remove Data from firebase
document.getElementById('delete').addEventListener('click',function(){
    readForm()

    firebase.database().ref('student/' + rollV).remove()
    alert('Data Deleted')
    document.getElementById('roll').value = "";
    document.getElementById('name').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('address').value = "";
})




