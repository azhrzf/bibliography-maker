import React from "react"
import Pustaka from "./Pustaka"

const Form = () => {
    const [formData, setFormData] = React.useState(
        {
            namaPenulis: "",
            tahunTerbit: "",
            judulBuku: "",
            tempatTerbit: "",
            namaPenerbit: ""
        }
    )

    const handleChange = (event) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Nama Penulis"
                    name="namaPenulis"
                    onChange={handleChange}
                    value={formData.namaPenulis}
                />
                <input
                    type="number"
                    max={new Date().getFullYear}
                    placeholder="Tahun Terbit"
                    name="tahunTerbit"
                    onChange={handleChange}
                    value={formData.tahunTerbit}
                />
                <input
                    type="text"
                    placeholder="Judul Buku"
                    name="judulBuku"
                    onChange={handleChange}
                    value={formData.judulBuku}
                />
                <input
                    type="text"
                    placeholder="Tempat Terbit"
                    name="tempatTerbit"
                    onChange={handleChange}
                    value={formData.tempatTerbit}
                />
                <input
                    type="text"
                    placeholder="Nama Penerbit"
                    name="namaPenerbit"
                    onChange={handleChange}
                    value={formData.namaPenerbit}
                />
            </form>
            <Pustaka
                namaPenulis={formData.namaPenulis}
                tahunTerbit={formData.tahunTerbit}
                judulBuku={formData.judulBuku}
                tempatTerbit={formData.tempatTerbit}
                namaPenerbit={formData.namaPenerbit}
            />
        </div>
    )
}

export default Form