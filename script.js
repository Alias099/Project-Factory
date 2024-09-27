function MyFunction() {
  var nam, famil;
  nam = document.getElementById("span_fname");
  famil = document.getElementById("span_lname");

  var UserName = document.forms["Myform"]["f_name"].value;
  var UserFamil = document.forms["Myform"]["l_name"].value;

  if (UserName == "" && UserFamil == "" && UserPass == "") {
    nam.style.display = "block";
    famil.style.display = "block";
    nam.innerHTML = "لطفا مقدار صحیح نام را وارد کنید";
    famil.innerHTML = "لطفا مقدار صحیح فامیل را وارد کنید";
    return false;
  } else if (UserName != "" && UserFamil == "") {
    famil.style.display = "block";
    nam.style.display = "none";
    famil.innerHTML = "لطفا مقدار فامیلی را وارد کنید";
    nam.innerHTML = "";
    return false;
  } else if (UserName == "" && UserFamil != "") {
    famil.style.display = "none";
    nam.style.display = "block";
    famil.innerHTML = "";
    nam.innerHTML = "لطفا مقدار نام را وارد کنید";
    return false;
  } else {
    alert("فرم یا موفقیت ارسال شد");
  }
}
