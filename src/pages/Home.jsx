import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const medicines = [
        { id: 1, nama: 'Paracetamol', kategori: 'Obat Pereda Demam', harga: '50,000' },
        { id: 2, nama: 'Panadol', kategori: 'Obat Sakit Kepala', harga: '75,000' },
    ];

    return (
        <div className="container mx-auto p-6">
            {/* Header */}
            <header className="text-center my-">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
                    Selamat Datang di Apoman
                </h1>
                <p className="text-lg text-gray-700 mt-2">
                    Kami menyediakan obat-obatan dan layanan kesehatan terbaik untuk Anda.
                </p>
            </header>

            {/* Daftar Obat */}
            <div className="bg-gray-100 p-6 shadow-xl rounded-lg">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Daftar Obat</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {medicines.map((medicine) => (
                        <div
                            key={medicine.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                        >
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-blue-600">{medicine.nama}</h3>
                                <p className="text-sm text-gray-500">{medicine.kategori}</p>
                                <p className="text-lg text-gray-800 font-semibold mt-2">Rp {medicine.harga}</p>
                            </div>
                            <div className="bg-gray-50 p-4 flex justify-between">
                                <Link
                                    to={`/edit/${medicine.id}`}
                                    className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 text-sm"
                                >
                                    Edit
                                </Link>
                                <Link
                                    to={`/details/${medicine.id}`}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-sm"
                                >
                                    Detail
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tombol Tambah Obat */}
            <div className="text-center mt-8">
                <Link
                    to="/tambah-obat"
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 shadow-md transform transition duration-300 hover:scale-105"
                >
                    Tambah Obat
                </Link>
            </div>
        </div>
    );
};

export default Home;
