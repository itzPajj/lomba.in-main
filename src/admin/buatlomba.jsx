import React, { useState, useEffect  } from 'react';
import Navbar from "../Navbar/navbar";
//import Button from "../components/Button";
//import Lomba from "../components/Lomba";

const BuatLomba = (props) => {
  const [formData, setFormData] = useState({
    namaLomba: '',
    kategori: '',
    deskripsi: '',
    penyelenggara: '',
    tanggal: '',
    image: null
  });

  const [lombas, setLombas] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/lomba')
      .then(response => response.json())
      .then(data => setLombas(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[1]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      fetch(`http://localhost:3000/lomba/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(updatedLomba => {
        setLombas(lombas.map(lomba => (lomba.id === editId ? updatedLomba : lomba)));
        setIsEditing(false);
        setEditId(null);
      });
    } else {
      fetch('http://localhost:3000/lomba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(newLomba => {
        setLombas([...lombas, newLomba]);
      });
    }
    setFormData({
      namaLomba: '',
      kategori: '',
      deskripsi: '',
      penyelenggara: '',
      tanggalMulai: '',
      tanggalBerakhir: '',
      image: null
    });
  };

  const handleEdit = (id) => {
    const lombaToEdit = lombas.find(lomba => lomba.id === id);
    setFormData(lombaToEdit);
    setIsEditing(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/lomba/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setLombas(lombas.filter(lomba => lomba.id !== id));
    });
  };

  return (
    <div className="items-center">
      <Navbar />
      <div className="mt-28 min-h-screen">
        <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% bg-clip-text text-transparent">DAFTAR LOMBA</h1>
        
        <div className="flex justify-center mt-10">
          <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="namaLomba">
                Nama Lomba
              </label>
              <input type="text" id="namaLomba" name="namaLomba" value={formData.namaLomba} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="kategori">
                Kategori
              </label>
              <select id="kategori" name="kategori" value={formData.kategori} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required >
                <option value="" disabled>Pilih Kategori</option>
                <option value="Fotografi">Fotografi</option>
                <option value="Videografi">Videografi</option>
                <option value="IT">IT</option>
                <option value="Sains">Sains</option>
                <option value="Matematika">Matematika</option>
                <option value="Bahasa">Bahasa</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deskripsi">
                Deskripsi
              </label>
              <textarea id="deskripsi" name="deskripsi" value={formData.deskripsi} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="penyelenggara">
                Penyelenggara
              </label>
              <input type="text" id="penyelenggara" name="penyelenggara" value={formData.penyelenggara} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tanggalMulai">
                Tanggal Lomba Dimulai
              </label>
              <input type="date" id="tanggalMulai" name="tanggalMulai" value={formData.tanggalMulai} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tanggalBerakhir">
                Tanggal Lomba Berakhir
              </label>
              <input type="date" id="tanggalBerakhir" name="tanggalBerakhir" value={formData.tanggalBerakhir} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Image
              </label>
              <input
                type="file" id="image" name="image" onChange={handleImageChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                {isEditing ? 'Update' : 'Daftar'}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl text-center font-bold">Daftar Lomba</h2>
          <ul className="list-disc mt-5">
            {lombas.map(lomba => (
              <li key={lomba.id} className="flex justify-between items-center py-2 px-4 bg-gray-100 mb-2 rounded">
                <div>
                  <p><strong>Nama:</strong> {lomba.namaLomba}</p>
                  <p><strong>Kategori:</strong> {lomba.kategori}</p>
                  <p><strong>Deskripsi:</strong> {lomba.deskripsi}</p>
                  <p><strong>Penyelenggara:</strong> {lomba.penyelenggara}</p>
                  <p><strong>Tanggal Mulai:</strong> {lomba.tanggalMulai}</p>
                  <p><strong>Tanggal Berakhir:</strong> {lomba.tanggalBerakhir}</p>
                </div>
                <div>
                  <button onClick={() => handleEdit(lomba.id)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">Edit</button>
                  <button onClick={() => handleDelete(lomba.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BuatLomba;
