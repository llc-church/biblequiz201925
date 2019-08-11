window.addEventListener('blur', stopTimer);
// if(localStorage.getItem('id')!==null){
//     window.location.href="block.html";
// }

function stopTimer() {
    // localStorage.setItem('id','blocked');
    window.location.href="block.html";
    // location.replace('block.html');
   }