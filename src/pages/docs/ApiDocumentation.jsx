import React from 'react';

const ApiDocumentation = () => {
    return (
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Dokumentasi API Apotek</h1>
            
            {/* GET Request Documentation */}
            <div className="bg-white shadow-lg rounded-lg p-8 mb-8 hover:shadow-xl transition-shadow">
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-4">GET Request</div>
                <h2 className="text-2xl font-semibold mb-4">Mengambil Data Obat</h2>
                <p className="text-gray-600 mb-4">
                    Endpoint ini digunakan untuk mengambil informasi detail obat berdasarkan ID.
                    Response akan mengembalikan data dalam format JSON.
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mb-4">
                    <pre className="text-green-400">
                        <code>
                            {`// Kode untuk mengambil data obat berdasarkan ID
fetch('http://localhost:3001/medicines/:id')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

/* Response:
{
    "id": "1",
    "nama": "Paracetamol",
    "kategori": "Obat Pereda Demam",
    "harga": "15,000",
    "deskripsi": "Obat untuk meredakan demam",
    "dosis": "500mg"
}
*/`}
                        </code>
                    </pre>
                </div>
                <p className="text-sm text-gray-500">
                    ℹ️ Catatan: Ganti ':id' dengan ID obat yang ingin diambil datanya
                </p>
            </div>

            {/* POST Request Documentation */}
            <div className="bg-white shadow-lg rounded-lg p-8 mb-8 hover:shadow-xl transition-shadow">
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-4">POST Request</div>
                <h2 className="text-2xl font-semibold mb-4">Menambah Data Obat Baru</h2>
                <p className="text-gray-600 mb-4">
                    Endpoint ini digunakan untuk menambahkan data obat baru ke database.
                    Data dikirim dalam format JSON.
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mb-4">
                    <pre className="text-blue-400">
                        <code>
                            {`// Kode untuk menambah data obat baru
fetch('http://localhost:3001/medicines', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        nama: 'Nama Obat',
        kategori: 'Kategori Obat',
        harga: 'Harga Obat',
        deskripsi: 'Deskripsi Obat',
        dosis: 'Dosis Obat',
    }),
})`}
                        </code>
                    </pre>
                </div>
                <p className="text-sm text-gray-500">
                    ℹ️ Catatan: Semua field harus diisi dengan benar
                </p>
            </div>

            {/* PUT Request Documentation */}
            <div className="bg-white shadow-lg rounded-lg p-8 mb-8 hover:shadow-xl transition-shadow">
                <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm mb-4">PUT Request</div>
                <h2 className="text-2xl font-semibold mb-4">Memperbarui Data Obat</h2>
                <p className="text-gray-600 mb-4">
                    Endpoint ini digunakan untuk memperbarui informasi obat yang sudah ada.
                    Data yang diperbarui dikirim dalam format JSON.
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mb-4">
                    <pre className="text-yellow-400">
                        <code>
                            {`// Kode untuk memperbarui data obat
fetch('http://localhost:3001/medicines/:id', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        nama: 'Nama Obat Baru',
        kategori: 'Kategori Obat Baru',
        harga: 'Harga Obat Baru',
        deskripsi: 'Deskripsi Obat Baru',
        dosis: 'Dosis Obat Baru',
    }),
})
    .then(response => response.json())
    .then(data => console.log('Sukses:', data))
    .catch(error => console.error('Error:', error));

/* Response:
{
    "id": "1",
    "nama": "Nama Obat Baru",
    "kategori": "Kategori Obat Baru",
    "harga": "Harga Obat Baru",
    "deskripsi": "Deskripsi Obat Baru",
    "dosis": "Dosis Obat Baru"
}
*/`}
                        </code>
                    </pre>
                </div>
                <p className="text-sm text-gray-500">
                    ℹ️ Catatan: Ganti ':id' dengan ID obat yang ingin diperbarui. Semua field harus diisi dengan benar.
                </p>
            </div>

            {/* DELETE Request Documentation */}
            <div className="bg-white shadow-lg rounded-lg p-8 mb-8 hover:shadow-xl transition-shadow">
                <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm mb-4">DELETE Request</div>
                <h2 className="text-2xl font-semibold mb-4">Menghapus Data Obat</h2>
                <p className="text-gray-600 mb-4">
                    Endpoint ini digunakan untuk menghapus data obat berdasarkan ID.
                    Setelah dihapus, data tidak dapat dikembalikan.
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mb-4">
                    <pre className="text-red-400">
                        <code>
                            {`// Kode untuk menghapus data obat
fetch('http://localhost:3001/medicines/:id', {
    method: 'DELETE',
})
    .then(response => response.json())
    .then(data => console.log('Sukses:', data))
    .catch(error => console.error('Error:', error));

/* Response:
{} // Empty object indicates successful deletion
*/`}
                        </code>
                    </pre>
                </div>
                <p className="text-sm text-gray-500">
                    ⚠️ Peringatan: Operasi ini tidak dapat dibatalkan. Pastikan data yang akan dihapus sudah benar.
                </p>
            </div>
        </div>
    );
};

export default ApiDocumentation;
