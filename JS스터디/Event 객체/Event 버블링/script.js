const div=document.querySelector('div');
const form=document.querySelector('form');
const p=document.querySelector('p');

form.addEventListener('click',function(e){
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.target===e.currentTarget);
    console.log(this.tagName);
});