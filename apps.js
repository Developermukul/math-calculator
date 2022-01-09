
//test
// const submit = document.querySelector('#submit')





const name = document.querySelector('#name')
const name2 = document.querySelector('#name2')
const jog = document.querySelector('#jog')
const biyog = document.querySelector('#biyog')
const gun = document.querySelector('#gun')
const vag = document.querySelector('#vag')



jog.addEventListener('click', function(){


    if(name.value == '' || name2.value == ''){
        alert('All fields are requird')
    }else{
        alert(Number(name.value) + Number(name2.value))
        name.value = ''
        name2.value = ''
    }


})

biyog.addEventListener('click', function(){

    if(name.value == '' || name2.value == ''){
        alert('All fields are requird')
    }else{
        alert(Number(name.value) - Number(name2.value))
        name.value = ''
        name2.value = ''
    }

})

gun.addEventListener('click', function(){

    if(name.value == '' || name2.value == ''){
        alert('All fields are requird')
    }else{
        alert(Number(name.value) * Number(name2.value))
        name.value = ''
        name2.value = ''
    }

})
vag.addEventListener('click', function(){

    if(name.value == '' || name2.value == ''){
        alert('All fields are requird')
    }else{
        alert(Number(name.value) / Number(name2.value))
        name.value = ''
        name2.value = ''
    }

})











name.addEventListener('keyup', function(){
    let pattern = /^[0-9]*$/

    if(pattern.test(name.value) == false){
        name.style = 'border: 1px solid red'
    }else{
        name.style = 'border: 1px solid #ddd;.'
        
    }
})
name2.addEventListener('keyup', function(){
    let pattern = /^[0-9]*$/

    if(pattern.test(name2.value) == false){
        name2.style = 'border: 1px solid red'
    }else{
        name2.style = 'border: 1px solid #ddd;.'
        
    }
})

