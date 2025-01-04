import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MedicineDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [medicine, setMedicine] = useState(null);

    useEffect(() => {
        const medicines = JSON.parse(localStorage.getItem('medicines')) || [];
        const selectedMedicine = medicines.find((med) => med.id === parseInt(id));
        if (selectedMedicine) {
            setMedicine(selectedMedicine);
        } else {
            alert('Obat tidak ditemukan!');
            navigate('/');
        }
    }, [id, navigate]);

    if (!medicine) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-6">
            <header className="text-center my-8">
                <h1 className="text-4xl font-extrabold text-blue-700">Detail Obat</h1>
                <p className="text-lg text-gray-700 mt-2">Informasi lengkap tentang obat yang dipilih.</p>
            </header>

            <div className="bg-white p-6 shadow-xl rounded-lg">
                <h2 className="text-2xl font-semibold text-blue-600">Nama Obat: {medicine.nama}</h2>
                <p className="mt-4 text-gray-700"><strong>Kategori:</strong> {medicine.kategori}</p>
                <p className="mt-2 text-gray-700"><strong>Harga:</strong> Rp {medicine.harga}</p>
                <p className="mt-2 text-gray-700"><strong>Deskripsi:</strong> {medicine.deskripsi || 'Belum ada deskripsi.'}</p>
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
