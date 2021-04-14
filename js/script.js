let sum=0
let count=0
const elementsBtn = document.querySelectorAll('.product-box__btn');
const elements = document.querySelectorAll('.product-box__item');
for (let i = 0; i < elementsBtn.length; i++) {
  elementsBtn[i].onclick = function(){
    addItem(elementsBtn[i]);
  };
}

let addItem=(e)=>{
    let qty=0
    if(!e.parentNode.querySelector('.qty__item').value){
        qty=1
    }else{
        qty=e.parentNode.querySelector('.qty__item').value
    }
    sum=sum+(Number(e.parentNode.querySelector('.price').innerHTML.split(' ')[0])*qty)
    count=count+Number(qty)
    document.querySelector('#count').innerHTML=count
    document.querySelector('#summ').innerHTML=sum
}

document.querySelector('#items_type').addEventListener('change', function(event){
    console.log(event.target.value)
    for (let i = 0; i < elements.length; i++) {
        if(event.target.value==0){
            elements[i].classList.remove('hideT')
        }else{
        elements[i].classList.remove('hideT')
        console.log(elements[i].dataset['f'])
        if(elements[i].dataset['f']!=event.target.value){
            elements[i].classList.add('hideT')
        }
    }
      }

})

document.querySelector('#items_price').addEventListener('change', function(event){
    console.log(event.target.value)
    for (let i = 0; i < elements.length; i++) {
        let price=(Number(elements[i].querySelector('.price').innerHTML.split(' ')[0]))
        if(event.target.value==0){
            elements[i].classList.remove('hideP')
        }else{
            elements[i].classList.remove('hideP')
            if(price>event.target.value){
                elements[i].classList.add('hideP')
        }
    }
      }

})

document.querySelector('#conf_order').addEventListener('click', function(event){
    document.querySelector('.modal').style.display='block'
})

document.querySelector('.modal_bg').addEventListener('click', function(event){
    document.querySelector('.modal').style.display='none'
})

document.querySelector('#name').addEventListener('change', function(event){
    let val = event.target.value.replace(/[\s]+/g, '')
    event.target.value=val
})

document.querySelector('#user_form').addEventListener('submit', function(event){
    event.preventDefault();
    document.querySelector('.modal').style.display='none'
    alert('Спасибо за покупку!')
    document.querySelector('#count').innerHTML='XXX'
    document.querySelector('#summ').innerHTML='XXX'
    count=0
    sum=0
})

