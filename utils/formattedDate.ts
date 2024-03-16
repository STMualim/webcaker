import moment from "moment";
import "moment/locale/id";
moment.locale("id");

export function formattedDate(date: string) {
  const parts = date.split("/"); // Membagi string berdasarkan tanda '/'
  const day = parseInt(parts[0], 10); // Mengambil bagian hari dan mengonversinya menjadi angka
  const month = parseInt(parts[1], 10) - 1; // Mengambil bagian bulan (dikurangi 1 karena indeks bulan dimulai dari 0)
  const year = parseInt(parts[2], 10); // Mengambil bagian tahun
  const formattedDate = new Date(year, month, day); // Membuat objek Date dengan tahun, bulan, dan hari yang diambil

  return moment(formattedDate).fromNow();
}
