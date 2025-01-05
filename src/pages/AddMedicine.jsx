// AddMedicine.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMedicine = () => {
    const [nama, setNama] = useState('');
    const [kategori, setKategori] = useState('');
    const [harga, setHarga] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [dosis, setDosis] = useState('');

    const navigate = useNavigate();
<<<<<<< HEAD
=======

    const saveMedicineToLocalStorage = (medicine) => {
        const medicines = JSON.parse(localStorage.getItem('medicines')) || [];
        medicines.push(medicine);
        localStorage.setItem('medicines', JSON.stringify(medicines));
    };
>>>>>>> 4dc7c72f8f7bab3fe9fccf09d924d66d45139bfd

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMedicine = {
            id: Date.now(),
            nama,
            kategori,
            harga,
            deskripsi,
            dosis,
        };
<<<<<<< HEAD
        fetch('http://localhost:3001/medicines', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMedicine),
        })
            .then(response => response.json())
            .then(() => {
                alert('Obat berhasil ditambahkan!');
                navigate('/');
            })
            .catch(error => {
                console.error('Error adding data:', error);
            });
=======
        saveMedicineToLocalStorage(newMedicine);
        alert('Obat berhasil ditambahkan!');
        navigate('/');
>>>>>>> 4dc7c72f8f7bab3fe9fccf09d924d66d45139bfd
    };

    return (
        <div className="container mx-auto p-6">
<<<<<<< HEAD
            <h1 className="text-3xl font-bold mb-6 text-center">Tambah Obat</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-6">
=======
            <h1 className="text-2xl font-bold mb-4">Tambah Obat</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
>>>>>>> 4dc7c72f8f7bab3fe9fccf09d924d66d45139bfd
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nama Obat</label>
                    <input
                        type="text"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Kategori</label>
                    <input
                        type="text"
                        value={kategori}
                        onChange={(e) => setKategori(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Harga</label>
                    <input
                        type="number"
                        value={harga}
                        onChange={(e) => setHarga(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Deskripsi</label>
                    <textarea
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Dosis</label>
                    <input
                        type="text"
                        value={dosis}
                        onChange={(e) => setDosis(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Tambahkan Obat
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddMedicine;
