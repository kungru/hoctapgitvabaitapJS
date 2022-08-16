console.log('hello');
let btn=document.getElementsByClassName("btn-primary");
console.log(btn);
for (let i=0; i<btn.length; i++){
    btn[i].onclick = function() {
        alert('dang nhap thanh cong');
        return;
    }
}

