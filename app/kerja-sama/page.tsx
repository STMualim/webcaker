import React from "react";

const PartnershipPage = () => {
  return (
    <div className="container mx-auto py-12 mt-16">
      <h1 className="text-3xl font-bold mb-6">Kerja Sama</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Kerja Sama 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Bersama Perusahaan A, Kita Mewujudkan Impian</h2>
          <p className="text-gray-600 mb-4">Kami bangga untuk bermitra dengan Perusahaan A dalam menyediakan kesempatan karier yang menarik bagi para pencari pekerjaan di Indonesia. Bersama-sama, kita mewujudkan impian dan membantu memajukan dunia kerja di negeri ini.</p>
          <a href="#" className="text-blue-500 hover:underline">Pelajari Lebih Lanjut</a>
        </div>

        {/* Kerja Sama 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Perusahaan B: Membentuk Masa Depan Bersama</h2>
          <p className="text-gray-600 mb-4">Kami mengucapkan terima kasih kepada Perusahaan B atas kerja sama yang telah terjalin. Dengan kerja sama ini, kami bersama-sama menciptakan masa depan yang cerah bagi para pencari pekerjaan dan perusahaan di Indonesia.</p>
          <a href="#" className="text-blue-500 hover:underline">Temukan Selengkapnya</a>
        </div>

        {/* Kerja Sama 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Kemitraan dengan Perusahaan C: Menuju Sukses Bersama</h2>
          <p className="text-gray-600 mb-4">Kami percaya bahwa dengan kemitraan yang kokoh dengan Perusahaan C, kami akan mencapai kesuksesan bersama. Bersama-sama, kita menjadikan pasar kerja Indonesia menjadi lebih inklusif, dinamis, dan berdaya saing tinggi.</p>
          <a href="#" className="text-blue-500 hover:underline">Baca Lebih Lanjut</a>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPage;
