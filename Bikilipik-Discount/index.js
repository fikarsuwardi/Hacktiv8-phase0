/*
Your pseudocode here
 */
var name = "Johan";
var role = "member baru";
var birthMonth = "Maret";
//  your code here

if (name === "") {
  console.log("Nama tidak boleh kosong!");
} else {
  if (role === "member baru") {
    if (birthMonth === "Januari") {
      console.log(
        `Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 50%!`
      );
    } else {
      console.log(
        `Maaf ${name}, voucher diskon hanya untuk yang lahir di bulan Januari.`
      );
    }
  } else if (role === "member lama") {
    if (birthMonth === "Januari") {
      console.log(
        `Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 30%!`
      );
    } else {
      console.log(
        `Maaf ${name}, voucher diskon hanya untuk yang lahir di bulan Januari.`
      );
    }
  } else {
    console.log(
      `Selamat datang di Bikilipik, ${name}. Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu.`
    );
  }
}
