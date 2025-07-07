import React, { useState, useEffect } from 'react';
import { Input } from './components/ui/input';

export default function App() {
  const [imoveis, setImoveis] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    registro: '',
    tipo: 'Renta',
    fotos: []
  });

  useEffect(() => {
    const data = localStorage.getItem('imoveis');
    if (data) setImoveis(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('imoveis', JSON.stringify(imoveis));
  }, [imoveis]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setForm({ ...form, fotos: urls });
  };

  const handleSubmit = () => {
    setImoveis([...imoveis, form]);
    setForm({ nombre: '', registro: '', tipo: 'Renta', fotos: [] });
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Registro de Propiedad</h1>
      <Input label="Nombre de la casa" name="nombre" value={form.nombre} onChange={handleChange} />
      <Input label="Número de registro" name="registro" value={form.registro} onChange={handleChange} />
      <div className="mb-2">
        <label className="block font-medium">Tipo</label>
        <select name="tipo" value={form.tipo} onChange={handleChange} className="border px-3 py-2 rounded-xl w-full">
          <option value="Renta">Renta</option>
          <option value="Venta">Venta</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block font-medium mb-1">Fotos</label>
        <input type="file" multiple onChange={handleFileChange} />
      </div>
      <button onClick={handleSubmit} className="bg-black text-white px-4 py-2 rounded-xl">Guardar</button>

      <h2 className="text-xl font-semibold mt-6">Propiedades Registradas</h2>
      {imoveis.map((item, index) => (
        <div key={index} className="border p-4 rounded-xl space-y-2">
          <p><strong>Nombre:</strong> {item.nombre}</p>
          <p><strong>Registro:</strong> {item.registro}</p>
          <p><strong>Tipo:</strong> {item.tipo}</p>
          <div className="flex gap-2 overflow-x-auto">
            {item.fotos.map((src, i) => (
              <img key={i} src={src} alt={`foto-${i}`} className="h-24 rounded" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}