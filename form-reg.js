var email1=/^[a-zA-Z0-9]+@(\w+\.)+\w+$/;
var f_email = document.getElementById('#email1');
var submit1 = document.getElementById('submit1');
var form_main = document.getElementById('login_form');

submit1.onclick = function () {
    var d;
    d = email1.test(f_email.value);
    console.log(d);
    if(d){
        alert("注册成功");
        form_main.submit();
    }
    else{
        alert("输入不符合规则");
    }
};