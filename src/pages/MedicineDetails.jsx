// src/pages/MedicineDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MedicineDetails = () => {
    const { id } = useParams(); // Mengambil ID obat dari URL
    const navigate = useNavigate(); // Untuk navigasi kembali ke Home
    const [medicine, setMedicine] = useState(null);

    useEffect(() => {
        // Di sini Anda dapat menggantikan ini dengan API atau data yang sudah ada
        // Ambil data obat berdasarkan ID
        const fetchMedicineData = async () => {
            // Ganti dengan pemanggilan API atau data dari state global
            // Contoh: const response = await fetch(`/api/medicines/${id}`);
            const fetchedData = {
                nama: 'paracetamol',
                kategori: 'Obat pereda demam',
                harga: '50000',
                deskripsi: 'Obat ini digunakan untuk meredakan demam.',
                dosis: '1 tablet setiap 6 jam',
            };
            setMedicine(fetchedData);
        };

        fetchMedicineData();
    }, [id]); // Hanya dijalankan saat ID berubah

    if (!medicine) {
        return <div>Loading...</div>; // Menampilkan loading jika data belum ada
    }

    return (
        <div className="container mx-auto p-6">
            <header className="text-center my-8">
                <h1 className="text-4xl font-extrabold text-blue-700">Detail Obat</h1>
                <p className="text-lg text-gray-700 mt-2">Informasi lengkap tentang obat yang dipilih.</p>
            </header>

            <div className="bg-white p-6 shadow-xl rounded-lg">
                <h2 className="text-2xl font-semibold text-blue-600">Nama Obat: {medicine.nama}</h2>
                <p className="mt-4 text-gray-700"><strong>Kategori:</strong> {medicine.kategori}</p>
                <p className="mt-2 text-gray-700"><strong>Harga:</strong> {medicine.harga}</p>
                <p className="mt-2 text-gray-700"><strong>Deskripsi:</strong> {medicine.deskripsi}</p>
                <p className="mt-2 text-gray-700"><strong>Dosis:</strong> {medicine.dosis}</p>

                <button
                    onClick={() => navigate('/')}
                    className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                    Kembali
                </button>
            </div>
        </div>
    );
};

export default MedicineDetails;
