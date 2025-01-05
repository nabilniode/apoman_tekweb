import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaInfoCircle, FaPlus } from 'react-icons/fa';
import { BsMenuButtonFill } from 'react-icons/bs';
import MedicineImage from '../foto/medicine.jpg';

const Home = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/medicines')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                setMedicines(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
            {/* Header */}
            <header className="flex justify-between items-center w-full max-w-4xl mb-6">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
                    Selamat Datang di Apoman
                </h1>
                <button className="text-3xl text-gray-600 hover:text-blue-500 transition">
                    <BsMenuButtonFill />
                </button>
            </header>

            {/* Daftar Obat */}
            <div className="bg-white p-6 shadow-xl rounded-lg w-full max-w-4xl">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Daftar Obat</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {medicines.map((medicine) => (
                        <div
                            key={medicine.id}
                            className="bg-gray-100 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                        >
                            {/* Gambar Obat */}
                            <img
                                src={MedicineImage}
                                alt={`Gambar ${medicine.nama}`}
                                className="w-full h-32 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-blue-600">{medicine.nama}</h3>
                                <p className="text-sm text-gray-500">{medicine.kategori}</p>
                                <p className="text-lg text-gray-800 font-semibold mt-2">Rp {medicine.harga}</p>
                            </div>
                            <div className="bg-gray-200 p-4 flex justify-between">
                                <Link
                                    to={`/edit/${medicine.id}`}
                                    className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 text-sm flex items-center gap-2"
                                >
                                    <FaEdit /> Edit
                                </Link>
                                <Link
                                    to={`/details/${medicine.id}`}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-sm flex items-center gap-2"
                                >
                                    <FaInfoCircle /> Detail
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
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 shadow-md transform transition duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                    <FaPlus /> Tambah Obat
                </Link>
            </div>
        </div>
    );
};

export default Home;
