import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditMedicine = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [medicine, setMedicine] = useState({
        nama: '',
        kategori: '',
        harga: '',
        deskripsi: '',
        dosis: '',
    });

    useEffect(() => {
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
    }, [id, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/medicines/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(medicine),
        })
            .then(response => response.json())
            .then(() => {
                alert('Data obat diperbarui!');
                navigate('/');
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus obat ini?');
        if (confirmDelete) {
            fetch(`http://localhost:3001/medicines/${id}`, {
                method: 'DELETE',
            })
                .then(() => {
                    alert('Data obat dihapus!');
                    navigate('/');
                })
                .catch(error => {
                    console.error('Error deleting data:', error);
                });
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Edit Obat</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-6">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nama Obat</label>
                    <input
                        type="text"
                        value={medicine.nama}
                        onChange={(e) => setMedicine({ ...medicine, nama: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Kategori</label>
                    <input
                        type="text"
                        value={medicine.kategori}
                        onChange={(e) => setMedicine({ ...medicine, kategori: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Harga</label>
                    <input
                        type="number"
                        value={medicine.harga}
                        onChange={(e) => setMedicine({ ...medicine, harga: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Deskripsi</label>
                    <textarea
                        value={medicine.deskripsi}
                        onChange={(e) => setMedicine({ ...medicine, deskripsi: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Dosis</label>
                    <input
                        type="text"
                        value={medicine.dosis}
                        onChange={(e) => setMedicine({ ...medicine, dosis: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Perbarui Obat
                    </button>
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Hapus Obat
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditMedicine;
