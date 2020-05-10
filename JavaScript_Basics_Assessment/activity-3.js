
alert('You will be prompted to input three student names to an already established list.');

const array1 = ['Amanda', 'Lehla', 'Julia'];
for (var i=0; i < 3; i++) {
    let newName = prompt('Enter student name:');
    array1.push(newName);
}

alert('Now, we will show you every student on the list.');
for (var i= 0; i < array1.length; i++) {
    console.log(array1[i]);
    alert(array1[i]);
}