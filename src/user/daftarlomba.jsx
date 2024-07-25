import { useEffect, useState } from 'react';
import Navbar from "../Navbar/navbar";
import Lomba from "../components/Lomba";
import axios from 'axios';

const DaftarLomba = (props) => {
  const [daftarLomba, setDaftarLomba] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/lomba')
      .then(response => {
        setDaftarLomba(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredLomba = daftarLomba.filter(lomba => 
    lomba.namaLomba.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lomba.kategori.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lomba.penyelenggara.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="items-center px-12">
      <Navbar />
      <div className="mt-28 min-h-screen">
        <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% bg-clip-text text-transparent">INFORMASI LOMBA</h1>
        
        <div className="flex justify-center mt-10">
          <input
            type="text"
            placeholder="Cari lomba..."
            value={searchQuery}
            onChange={handleSearch}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div className="mt-5 grid grid-cols-4 gap-7 mx-5">
          {filteredLomba.map((lomba) => (
            <Lomba key={lomba.id}>
              <Lomba.Header image={lomba.image} />
              <Lomba.Category category={lomba.kategori} />
              <Lomba.Body 
                namaLomba={lomba.namaLomba} 
                penyelenggara={lomba.penyelenggara} 
                tanggal={lomba.tanggal} 
                deskripsi={lomba.deskripsi}
              />
            </Lomba>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DaftarLomba;
