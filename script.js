// khusus waktu tahun footer
const waktu = new Date();
let tahun =  waktu.getFullYear();
document.getElementById("tahun").innerHTML = tahun;

// membuat efek back to top
let mybutton = document.getElementById("myBtn");

// ketika user mengscroll website ketinggian 20 kaki/feet
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// jika user menekan tombol ini secara otomatis halaman web ini yang diakses user akan ke atas
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// untuk scroll khusus menu