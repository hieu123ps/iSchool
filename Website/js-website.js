 

/*Drop menu
document.getElementById("myBtn").onclick = function() {myFunction()};
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}*/



//Đăng xuất
function dangxuat() {
 window.location.replace("index.html");
}
/*loca.repl-xóa trang cũ 
loca.asg-khong xóa trang cũ vẫn giữ nguyên*/

// Đăng nhập

var ListUser = [
  {
    Account:'student',
    Email: 'student@gmail.com',
    Id: "22222",
    Phone: '084112233',
    Password:'12345678', 
    Born: '01/01/2002',
    Name:'Nguyen Van A',
    SBD: '0933',
    Class:'12C3',
    Code: '000000'
  },
  {
  Account:'teacher',
  Password:'12345678', 
  Email: 'teacher@gmail.com',
  Phone: '084223344',
  Name:'Giao Vien',
  Born: '01/01/1975',
  Class: '12C3',
  Code: '111111'
  }
];



  function dangnhap() { 

    var pass = document.getElementById('pass-login').value;
    var acc = document.getElementById('user-login').value;
    var dn = document.getElementById('box-input');
    var f = document.getElementById("flog");
    if(acc.length > 0 && (pass.length > 0 && pass.length >= 8))
    {
      
      for(let i = 0; i < ListUser.length; i++)
      {
        if(acc == ListUser[i].Account && pass == ListUser[i].Password)
        {
          dn.action = "main.html";
          alert("Bạn đã đăng nhập thành công!");
          console.log("True");
          return true;
        }
      }      
    }
    else
    {
        console.log("False");
        f.classList.toggle("show");
        return false;
    }
  }


/*lay mat khau*/

function getCode()
{
  var email = document.getElementById('email');
  var sdt = document.getElementById('sdt');
  const fget = document.getElementById('forget-pass');
  const flog = document.getElementById('flog');

  var flag = false;

  for(let i = 0; ListUser.length; i++)
  {
      if(email.value == ListUser[i].Email || sdt.value == ListUser[i].Phone)
      {

        flag = true;
        break;
      }
  }
  if(flag == true)
  {
    console.log('Mã xác nhận');
    alert('Mã xác nhận đã được gửi đi');
    fget.action = 'laymatkhau.html';    
  }
  else
  {
    alert("Nhập sai địa chỉ email hoặc số điện thoại.")
  }

}

function getPass()
{
  var code = document.getElementById('code');
  var newPass = document.getElementById('NewPass');
  var rnewPass = document.getElementById('RNewPass');
  var gtp = document.getElementById('getpass');

  var flag = false;
  var i;
  for(i = 0; i < ListUser.length; i++)
  {
      if(code.value == ListUser[i].Code)
      {
        if(newPass.value == rnewPass.value)
        {
            flag = true;
            break;
        }
      }
  } 
  if(flag == true) 
  {
    ListUser[i].Password = newPass.value;
    console.log(ListUser[i].Password);
    gtp.action = 'dangnhap.html';
    alert("Bạn đã đổi mất khẩu thành công !");
  } 
  else
    {
      alert("Bạn đã nhập sai, vui lòng nhập lại !");
    }
}

  /*hien thi tkb*/
    function myClass(value)
    { var txtt = document.getElementById('txt');
      var tb1 = document.getElementById('tb1');
      var tb2 = document.getElementById('tb2');
      var tb3 = document.getElementById('tb3');

      if(value == 10)
      {
        txtt.innerHTML = 'Thời khóa biểu lớp 10';     
        tb1.style.display = 'block';  
        tb2.style.display = 'none';  
        tb3.style.display = 'none';    
      }
      if(value == 11) 
      {
        txtt.innerHTML = 'Thời khóa biểu lớp 11';  
        tb2.style.display = 'block';    
        tb1.style.display = 'none'; 
        tb3.style.display = 'none';        
      }
      if(value == 12) 
      {
        txtt.innerHTML = 'Thời khóa biểu lớp 12';   
        tb3.style.display = 'block';   
        tb1.style.display = 'none'; 
        tb2.style.display = 'none';        
      }
    }

//Xem diem
function CheckScore() {
  var sbd = document.getElementById('sbd');
  var code = document.getElementById('codeSV');
  if(sbd.value == ListUser[0].SBD && code.value == ListUser[0].Id)
  {
    alert("Điểm của bạn là: Toán: 8; Văn: 6");
  }
  else
  {
    alert("Dữ liệu không đúng, mời nhập lại")
  }
}

/*slideshow*/
var images = [
  "../Icon/img_01.jpg",
  "../Icon/img_02.jpg",
  "../Icon/img_03.jpg"
];
var slider = document.getElementById('img-first');
const bt1 = document.getElementById('next');
const bt2 = document.getElementById('back');
var num = 0;
function next() {
  var slider = document.getElementById('img-first');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function back(){
  var slider = document.getElementById('img-first');

    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}


//thay ảnh đại diện

  var NewPic = document.getElementById('NewPic');
  var OldPic = document.getElementById('OldPic');
  function changePic(){
    OldPic.src = NewPic.value;
  }

  function resetPic()
  {
    OldPic.src = "..\Icon\acc-logo.svg";
  }




/*
//drop menu

function presonalMenu() {
	document.getElementById("menu-drop").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropmenu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/
