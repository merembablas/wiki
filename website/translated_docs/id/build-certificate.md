---
id: build-certificate
title: Sertifikat Digital
sidebar_label: Sertifikat Digital
---

Nuchain mendukung pembuatan sertifikat digital.

Data sertifikat di Nuchain bersifiat _abadi_, sekali ditulis tidak dapat dihapus, namun tetap bisa 
dicabut (revoke) untuk mencabut validitasnya.

### Sifat Sertifikat

1. Sertifikat bisa dicabut oleh organisasi yang menerbitkan sertifikat, sehingga menjadikan sertifikat tidak lagi valid.
2. Sertifikat bisa kadaluarsa apabila diset oleh organisasi penerbit.

### Membuat Sertifikat

Untuk dapat membuat sertifikat maka diperlukan organisasi sebagai wadah (holder) dari penerbit sertifikat tersebut, 
cara membuat organisasi bisa baca bagian [Organisasi](build-organization.md).

Pembuatan sertifikat di Nuchain bisa digambarkan sebagai berikut:

![Nuchain Certificate](/img/nuchain-certificate.svg)

1. Organisasi perlu membuat sertifikat (sebagai template) untuk kemudian bisa digunakan untuk diberikan (issued)
kepada penerima sertifikat tersebut. Orang yang bisa membuat sertifikat adalah `admin` dari organisasi atau orang yang memiliki akses [DId](build-did.md) ke organisasi. Pembuatan sertifikat bisa menggunakan fungsi ekstrinsik `certificate.createCert`.
2. Organisasi memberikan sertifikat kepada seseorang, menggunakan fungsi ekstrinsik `certificate.issueCert`.


### Memeriksa Sertifikat

Sertifikat yang telah dibuat dan diterbitkan akan ditulis di _blockchain_ dan bisa dibuktikan dengan cara melakukan query melalui fungsi `certificate.issuedCert(ID)`.

Validitas sertifikat bisa dibuktikan dengan memastikan dua hal:

1. Sertifikat tidak dicabut.
2. Sertifikat tidak kadaluarsa.

### Pencabutan

Sertifikat digital di Nuchain bisa dicabut sehingga menghilangkan validitasnya, untuk mencabutnya bisa menggunakan fungsi ekstrinsik `certificate.revoke_cert`.

### Kadaluarsa

Sertifikat digital bisa kadaluarsa apabila penerbit menginginkannya. Hal ini bisa dilakukan dengan cara mengisi parameter `expired` ketika menerbitkan sertifikat.

> **Catatan:** Sertifikat digital di Nuchain hanya sebagai platform saja, bukan sebagai otoritas.
