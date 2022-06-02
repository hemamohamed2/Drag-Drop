let clear = document.querySelector('.clear');
let add = document.getElementById('add');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');
let drag = null;


if (localStorage.getItem('product') != null) {
    boxs[0].innerHTML = JSON.parse(localStorage.getItem('product'));
    dragItem();
}else {
    boxs[0].innerHTML;
}

add.onclick = function(){
    if(inp.value != '') {
        boxs[0].innerHTML +=`
            <p class = "item" draggable = "true">${inp.value}</p>`
        inp.value = '';
        localStorage.setItem('product' , JSON.stringify(boxs[0].innerHTML));
        clear.style.display = 'block'
    }
    dragItem();
}

function dragItem() {

    let items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('dragstart' ,function(){
            drag = item;
            item.style.opacity = '0.5'
            
        })

        item.addEventListener('dragend' ,function(){
            drag = null ; 
            item.style.opacity = '1';
            
        })
    

        boxs.forEach(box => {

            box.addEventListener('dragover', function(e){
                e.preventDefault();
                box.style.background = '#090';
                box.style.color = '#fff';
            })

            box.addEventListener('dragleave', function(){
                box.style.background = '#fff';
                box.style.color = '#000';
            })

            box.addEventListener('drop' ,function(){
                box.append(drag);
                box.style.background = '#fff';
                box.style.color = '#000';
            })
        })

        })
}

clear.onclick = function() {
    localStorage.clear();
    window.location.reload();
}




