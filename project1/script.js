
const buttons=document.querySelectorAll('.button');
//console.log(buttons);
const body=document.querySelector('body');

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    //console.log(e.currentTarget.id);

    if(e.target.id ==='grey'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id ==='white'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id ==='blue'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id ==='yellow'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id ==='purple'){
      body.style.backgroundColor = e.target.id;
    }
  });
});
// buttons.forEach(button => {
//   button.addEventListener('click', (e) => {
//     const color = e.currentTarget.dataset.color;

//     document.body.style.backgroundColor = color;
//   });
// });