import React from "react";

const DonationPage = () => {
  return (
    <div className="container mx-auto py-12 mt-16">
      <h1 className="text-3xl font-bold mb-6">Donasi</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-gray-600 mb-4">Kami sangat menghargai dukungan Anda dalam menjaga layanan kami tetap berjalan. Dengan sumbangan Anda, kami dapat terus menyediakan informasi tentang lowongan pekerjaan kepada masyarakat Indonesia. Untuk memberikan donasi, silakan kunjungi situs web donasi kami di bawah ini:</p>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Donasi Sekarang</a>
      </div>
    </div>
  );
};

export default DonationPage;
