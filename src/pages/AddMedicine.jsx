import React, { useState } from 'react';

const AddMedicine = () => {
    const [nama, setNama] = useState('');
    const [kategori, setKategori] = useState('');
    const [harga, setHarga] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Obat Ditambah:', { nama, kategori, harga });
    };

    return (
        <div className="container mx-auto p-6">
            <header className="text-center my-8">
                <h1 className="text-4xl font-extrabold text-blue-900">Tambah Obat</h1>
                <p className="text-lg text-gray-700 mt-2">Isi informasi obat yang baru untuk ditambahkan.</p>
            </header>

            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-xl rounded-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Nama Obat</label>
                    <input
                        type="text"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Kategori</label>
                    <input
                        type="text"
                        value={kategori}
                        onChange={(e) => setKategori(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Harga</label>
                    <input
                        type="text"
                        value={harga}
                        onChange={(e) => setHarga(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                    Tambah Obat
                </button>
            </form>
        </div>
    );
};

export default AddMedicine;  // Pastikan komponen diekspor
