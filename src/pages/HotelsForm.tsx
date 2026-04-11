

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/client";
import "../style/hotelForm.css";

export default function HotelForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // 👈 pega o ID da URL

  const isEdit = !!id;

  const [form, setForm] = useState({
    name: "",
    city: "",
    pricePerNight: "",
    address: "",
    description: "",
    descriptionHome: "",
    image: ""
  });

  const [amenity, setAmenity] = useState("");
  const [amenities, setAmenities] = useState<string[]>([]);

  // 🔥 BUSCAR HOTEL PARA EDITAR
  useEffect(() => {
    if (isEdit) {
      api.get(`/hotels/${id}`).then(res => {
        const data = res.data;

        setForm({
          name: data.name || "",
          city: data.city || "",
          pricePerNight: data.pricePerNight || "",
          address: data.address || "",
          description: data.description || "",
          descriptionHome: data.descriptionHome || "",
          image: data.image || ""
        });

        setAmenities(data.amenities || []);
      });
    }
  }, [id]);

  const addAmenity = () => {
    if (amenity.trim()) {
      setAmenities([...amenities, amenity]);
      setAmenity("");
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.name || !form.city || !form.address || Number(form.pricePerNight) <= 0) {
      alert("Preencha os campos obrigatórios");
      return;
    }

    try {
      const payload = {
        ...form,
        pricePerNight: Number(form.pricePerNight),
        amenities,
        images: []
      };

      if (isEdit) {
        // 🔥 ATUALIZAR
        await api.put(`/hotels/${id}`, payload);
        alert("Hotel atualizado!");
      } else {
        // 🔥 CRIAR
        await api.post("/hotels", payload);
        alert("Hotel criado!");
      }

      navigate("/app/hotels");

    } catch (error: any) {
      console.log(error.response?.data);
      alert("Erro ao salvar");
    }
  };

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1 className="form-title">
          {isEdit ? "Editar Hotel" : "Cadastrar Hotel"}
        </h1>

        <div className="form-group">
          <label>Nome</label>
          <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Cidade</label>
            <input value={form.city} onChange={e => setForm({...form, city: e.target.value})} />
          </div>

          <div className="form-group">
            <label>Preço por noite</label>
            <input
              type="number"
              value={form.pricePerNight}
              onChange={e => setForm({...form, pricePerNight: e.target.value})}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Endereço</label>
          <input value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
        </div>

        <div className="form-group">
          <label>Descrição</label>
          <textarea
            rows={3}
            value={form.description}
            onChange={e => setForm({...form, description: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Resumo (Home)</label>
          <textarea
            rows={2}
            value={form.descriptionHome}
            onChange={e => setForm({...form, descriptionHome: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Imagem (URL)</label>
          <input value={form.image} onChange={e => setForm({...form, image: e.target.value})} />
        </div>

        <div className="form-group">
          <label>Amenities</label>

          <div className="tag-input">
            <input value={amenity} onChange={e => setAmenity(e.target.value)} />
            <button type="button" onClick={addAmenity}>+</button>
          </div>

          <div className="tag-list">
            {amenities.map((a, i) => (
              <span key={i} className="tag">{a}</span>
            ))}
          </div>
        </div>

        <button className="button-submit">
          {isEdit ? "Atualizar Hotel" : "Salvar Hotel"}
        </button>
      </form>
    </div>
  );
}