const button = document.querySelectorAll('.button');

const body = document.querySelector('body');

button.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
       
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
    })
})

//if we want goes back to the original color after double click
// const buttons = document.querySelectorAll('.button');
// const body = document.body;
// const originalColor = getComputedStyle(body).backgroundColor;

// buttons.forEach(btn => {
//   btn.addEventListener('click', e => {
//     body.style.backgroundColor = e.target.id;
//   });

//   btn.addEventListener('dblclick', e => {
//     if (window.getSelection) {
//       const sel = window.getSelection();
//       if (sel && sel.removeAllRanges) sel.removeAllRanges();
//     }
//     document.activeElement && document.activeElement.blur?.();
//     body.style.backgroundColor = originalColor;
//   });
// });
