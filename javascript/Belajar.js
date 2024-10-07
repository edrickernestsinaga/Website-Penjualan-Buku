document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) =>{
        let parent  = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi').innerHTML;

        console.log(`gambar: ${gambar}`);
        console.log(`harga: ${harga}`);
        console.log(`judul: ${judul}`);
        console.log(`deskripsi: ${deskripsi}`);

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement ('img');
        image.src = gambar;
        document.querySelector('.ModalImage').innerHTML = '';
        document.querySelector('.ModalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        const nohp = '6281282142315';
        let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Hallo min, Saya Mau Order`;
        document.querySelector('.btnBeli').href = pesan;

    })
})