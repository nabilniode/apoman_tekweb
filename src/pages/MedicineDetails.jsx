import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MedicineDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [medicine, setMedicine] = useState(null);

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

    if (!medicine) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Detail Obat</h1>
            <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-6">
                <h2 className="text-2xl font-semibold mb-4">{medicine.nama}</h2>
                <p className="mb-4"><strong>Kategori:</strong> {medicine.kategori}</p>
                <p className="mb-4"><strong>Harga:</strong> {medicine.harga}</p>
                <p className="mb-4"><strong>Deskripsi:</strong> {medicine.deskripsi}</p>
                <p className="mb-4"><strong>Dosis:</strong> {medicine.dosis}</p>
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
