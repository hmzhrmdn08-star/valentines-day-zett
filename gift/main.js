onload = () => {

    // mulai animasi bunga
    document.body.classList.remove("container");

    const nextBtn = document.getElementById("nextFlower");

    // tombol muncul setelah 5 detik
    setTimeout(() => {
        nextBtn.classList.add("show");
    }, 6700);

    // klik → pindah halaman
    nextBtn.addEventListener("click", () => {
        window.location.href = "../balloon.html";
    });

};