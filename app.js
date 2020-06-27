function getnum(num){
    var main = document.getElementById('main')
    main.value += num
}
function getclear(){
    var main = document.getElementById('main')
    main.value = ''
}
function result(){
    var main = document.getElementById('main')
    console.log(main.value);
    
    main.value = eval(main.value)
}