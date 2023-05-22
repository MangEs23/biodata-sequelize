# biodata-sequelize

##  Panduan Menjalakan aplikasi

- clone repositori ini
- lalu buka folder repositori ini pada terminal anda

### konfigurasi .env dan database

- ubah value `PASSWORD` dan `USER` pada file `.env`  menjadi password dan username akun mysql/mariaDB anda
- buka database admin (contoh phpmyadmin, adminer, dbeaver dll) dan buatlah database kosong dengan nama `biodata_seq` atau anda bisa mengcopy kode dibawah ini lalu pastekan pada tab SQL di database admin anda
> ```sql
> CREATE DATABASE biodata_seq 
>```
### konfigurasi library npm
- setelah menyelesaikan tahap di atas buka folder repo ini pada terminal dan ketikan `npm install`
- setelah itu ketikan `npm start` maka localhost akan berjalan pada port 3000
