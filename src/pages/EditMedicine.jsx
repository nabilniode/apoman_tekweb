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
    });

    useEffect(() => {
        // Gantikan ini dengan panggilan API atau state global untuk mendapatkan data obat
        const fetchMedicineData = async () => {
            const fetchedData = {
                nama: 'paracetamol',
                kategori: 'Obat pereda demam',
                harga: '50000',
                deskripsi: 'Obat ini digunakan untuk meredakan demam.',
            };
            setMedicine(fetchedData);
        };

        fetchMedicineData();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Data obat diperbarui:', medicine);
        navigate('/');
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus obat ini?');
        if (confirmDelete) {
            console.log('Data obat dihapus:', id);
            // Tambahkan logika untuk menghapus data (API atau state global)
            navigate('/'); // Redirect ke halaman utama setelah menghapus
        }
    };

    return (
        <div className="container mx-auto p-6">
            <header className="text-center my-8">
                <h1 className="text-4xl font-extrabold text-blue-700">Edit Obat</h1>
                <p className="text-lg text-gray-700 mt-2">Perbarui informasi obat yang dipilih.</p>
            </header>

            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-xl rounded-lg">
                <label className="block text-gray-700">Nama Obat:</label>
                <input
                    type="text"
                    value={medicine.nama}
                    onChange={(e) => setMedicine({ ...medicine, nama: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                    required
                />
                <label className="block text-gray-700 mt-4">Kategori:</label>
                <input
                    type="text"
                    value={medicine.kategori}
                    onChange={(e) => setMedicine({ ...medicine, kategori: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                    required
                />
                <label className="block text-gray-700 mt-4">Harga:</label>
                <input
                    type="text"
                    value={medicine.harga}
                    onChange={(e) => setMedicine({ ...medicine, harga: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                    required
                />
                <label className="block text-gray-700 mt-4">Deskripsi:</label>
                <textarea
                    value={medicine.deskripsi}
                    onChange={(e) => setMedicine({ ...medicine, deskripsi: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                    required
                ></textarea>

                <div className="flex justify-end mt-6">
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                    >
                        Perbarui
                    </button>
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 ml-2"
                    >
                        Hapus
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditMedicine;
