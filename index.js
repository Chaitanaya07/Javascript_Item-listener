// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title  = "NEW YEAR";
// console.log(document.doctype);
// console.log(document.all[10]);
// docoument.all[10].textcontent = "Jack";
// console.log(docoument.forms);
// console.log(docoument.links); 


// var title = (document.getElementById('header-title'));
// title.textContent = "Jack";
// title.innerText = "Jack";
// title.style.color = "yellow";

// console.log(title);

// var items = document.getElementsByClassName("list-group-item");
// console.log(items[1]);
// items[1].textContent = 'Names';


// QuerySelector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 6px #000';

// var input = document.querySelector('input');
// input.value = 'Enter Item';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// QuerySelectorAll
// var title = document.querySelectorAll('.title');
// console.log(title);
// title[0].textContent = 'New Content';


var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length; i++)
{
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';

}

