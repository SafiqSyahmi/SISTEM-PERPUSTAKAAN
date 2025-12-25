const API = "https://script.google.com/macros/s/AKfycbzYlCeDcGfve2jA5nrHDTeNN_6BIaApJFJHkDBjRZXdY1cfaklRq0trc-QVs-Poz_1s/exec";

function login(){
  fetch(API,{
    method:"POST",
    body:JSON.stringify({
      action:"login",
      user:user.value,
      pass:pass.value
    })
  })
  .then(r=>r.json())
  .then(d=>{
    if(d.status==="ok"){
      loginDiv(false);
    }else alert("Login gagal");
  });
}

function loginDiv(ok){
  login.classList.toggle("hidden",ok);
  menu.classList.toggle("hidden",!ok);
}

function show(id){
  menu.classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

barcodeP?.addEventListener("input",()=>{
  fetch(API,{method:"POST",body:JSON.stringify({action:"getBook",barcode:barcodeP.value})})
  .then(r=>r.json()).then(d=>bukuP.value=d.buku);
});

barcodeR?.addEventListener("input",()=>{
  fetch(API,{method:"POST",body:JSON.stringify({action:"getBook",barcode:barcodeR.value})})
  .then(r=>r.json()).then(d=>bukuR.value=d.buku);
});

function pinjam(){
  fetch(API,{method:"POST",body:JSON.stringify({
    action:"pinjam",
    nama:namaP.value,
    kelas:kelasP.value,
    barcode:barcodeP.value,
    buku:bukuP.value
  })}).then(()=>location.reload());
}

function pulang(){
  fetch(API,{method:"POST",body:JSON.stringify({
    action:"pulang",
    nama:namaR.value,
    barcode:barcodeR.value
  })}).then(()=>location.reload());
}
