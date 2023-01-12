console.log('Marvin the Martian is rad');

var number =10;
var string ='Earthling Pew Pew';
var isHuman = true;

if(number==10){
    console.log('Yeah Human');
} else {
    console.log('Nope!');
}


if(number==5){
    console.log('Yeah Human');
} else {
    console.log('Nope!');
}

var groceries = ['Milk', 'Eggs', 'Cheese'];
for(var i=0; i<groceries.length; i++){
    console.log(groceries[i]);
}

function listGroceries(){
    for(var i=0; i<groceries.length; i++)
        console.log(groceries[i]);
}
listGroceries();

for(var i=0; i<10; i++){
    console.log(i);
}

document.getElementById('box').addEventListener('click', function(){
    alert('I got Clicked');
})


document.getElementById('box').innerHtml = number +5;
document.getElementById('box').innerHtml = string;