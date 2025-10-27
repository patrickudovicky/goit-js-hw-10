import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

    promise
    .then(()=>{
        iziToast.success({            
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: "topRight",
        });
    }).catch(()=>{
        iziToast.error({
            message: `❌ Rejected promise in ${delay}ms`,
            position: "topRight",
        })
    }) 
}


