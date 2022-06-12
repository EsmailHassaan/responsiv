let links = Array.from(document.querySelectorAll('.navbar-nav li'));

links.forEach(el=>{
    el.addEventListener('click',()=>{
        links.forEach(ele=>{
            ele.classList.remove('active')
        })
        el.classList.add('active')
        document.querySelector('.' + el.dataset.sectio).scrollIntoView({
            behavior: 'smooth'
        })
    })
})





let key = Array.from(document.querySelectorAll('.list ul li a'));
let layer = Array.from(document.querySelectorAll('.layer'));

layer.forEach(ele=>{
    ele.classList.add('full-width')
})

key.forEach(el=>{
    el.addEventListener('click',()=>{ 
        key.forEach(ele=>{
            ele.classList.remove('active-a')
        })
        el.classList.add('active-a')
        layer.forEach(ele=>{
            ele.classList.remove('full-width')
        })
        layer.forEach(ele=>{
            if(ele.classList.contains(el.dataset.key) === true){
                ele.classList.add('full-width')
            }
        })
    })
})