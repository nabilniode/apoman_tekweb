import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MedicineDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [medicine, setMedicine] = useState(null);

    useEffect(() => {
<<<<<<< HEAD
        fetch(`http://localhost:3001/medicines/${id}`)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                if (data) {
                    setMedicine(data);
                } else {
                    alert('Obat tidak ditemukan!');
                    navigate('/');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
=======
        const medicines = JSON.parse(localStorage.getItem('medicines')) || [];
        const selectedMedicine = medicines.find((med) => med.id === parseInt(id));
        if (selectedMedicine) {
            setMedicine(selectedMedicine);
        } else {
            alert('Obat tidak ditemukan!');
            navigate('/');
        }
>>>>>>> 4dc7c72f8f7bab3fe9fccf09d924d66d45139bfd
    }, [id, navigate]);

    if (!medicine) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-6">
<<<<<<< HEAD
            <h1 className="text-3xl font-bold mb-6 text-center">Detail Obat</h1>
            <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-6">
                <h2 className="text-2xl font-semibold mb-4">{medicine.nama}</h2>
                <p className="mb-4"><strong>Kategori:</strong> {medicine.kategori}</p>
                <p className="mb-4"><strong>Harga:</strong> {medicine.harga}</p>
                <p className="mb-4"><strong>Deskripsi:</strong> {medicine.deskripsi}</p>
                <p className="mb-4"><strong>Dosis:</strong> {medicine.dosis}</p>
=======
            <header className="text-center my-8">
                <h1 className="text-4xl font-extrabold text-blue-700">Detail Obat</h1>
                <p className="text-lg text-gray-700 mt-2">Informasi lengkap tentang obat yang dipilih.</p>
            </header>

            <div className="bg-white p-6 shadow-xl rounded-lg">
                <h2 className="text-2xl font-semibold text-blue-600">Nama Obat: {medicine.nama}</h2>
                <p className="mt-4 text-gray-700"><strong>Kategori:</strong> {medicine.kategori}</p>
                <p className="mt-2 text-gray-700"><strong>Harga:</strong> Rp {medicine.harga}</p>
                <p className="mt-2 text-gray-700"><strong>Deskripsi:</strong> {medicine.deskripsi || 'Belum ada deskripsi.'}</p>
>>>>>>> 4dc7c72f8f7bab3fe9fccf09d924d66d45139bfd
                <button
                    onClick={() => navigate(`/edit/${id}`)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Edit Obat
                </button>
            </div>
        </div>
    );
};

export default MedicineDetails;
