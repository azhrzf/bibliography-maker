import React from "react"
import Pustaka from "./Pustaka"

const Form = () => {
    const [formData, setFormData] = React.useState(
        {
            namaPenulis: "",
            namaKapital: false,
            tahunTerbit: "",
            judulBuku: "",
            judulKapital: false,
            tempatTerbit: "",
            tempatKapital: false,
            namaPenerbit: "",
            penerbitKapital: false
        }
    )

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target

        let checkTahunTerbit
        if (name === "tahunTerbit") {
            let checkNull = value.toString()
            if (value > new Date().getFullYear()) {
                checkTahunTerbit = new Date().getFullYear()
            }
            else if (value < 0 || checkNull[0] === "0") {
                checkTahunTerbit = 1
            }
            else {
                checkTahunTerbit = value
            }
        }

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "number" ? checkTahunTerbit : (type === "checkbox" ? checked : value)
            }
        })
    }



    return (
        <div>
            <form >
                <input
                    type="text"
                    placeholder="Nama Penulis"
                    name="namaPenulis"
                    onChange={handleChange}
                    value={formData.namaPenulis}
                    required
                />
                <input
                    type="checkbox"
                    id="namaKapital"
                    onChange={handleChange}
                    checked={formData.namaKapital}
                    name="namaKapital"
                />
                <label htmlFor="namaKapital">Kapital Otomatis Nama</label>
                <br/>
                <input
                    type="number"
                    placeholder="Tahun Terbit"
                    name="tahunTerbit"
                    onChange={handleChange}
                    value={formData.tahunTerbit}
                    required
                />
                <br/>
                <input
                    type="text"
                    placeholder="Judul Buku"
                    name="judulBuku"
                    onChange={handleChange}
                    value={formData.judulBuku}
                    required
                />
                 <input
                    type="checkbox"
                    id="judulKapital"
                    onChange={handleChange}
                    checked={formData.judulKapital}
                    name="judulKapital"
                />
                <label htmlFor="judulKapital">Kapital Otomatis Judul Buku</label>
                <br/>
                <input
                    type="text"
                    placeholder="Tempat Terbit"
                    name="tempatTerbit"
                    onChange={handleChange}
                    value={formData.tempatTerbit}
                    required
                />
                 <input
                    type="checkbox"
                    id="tempatKapital"
                    onChange={handleChange}
                    checked={formData.tempatKapital}
                    name="tempatKapital"
                />
                <label htmlFor="tempatKapital">Kapital Otomatis Tempat Terbit</label>
                <br/>
                <input
                    type="text"
                    placeholder="Nama Penerbit"
                    name="namaPenerbit"
                    onChange={handleChange}
                    value={formData.namaPenerbit}
                    required
                />
                 <input
                    type="checkbox"
                    id="penerbitKapital"
                    onChange={handleChange}
                    checked={formData.penerbitKapital}
                    name="penerbitKapital"
                />
                <label htmlFor="penerbitKapital">Kapital Otomatis Nama Penerbit</label>
            </form>
            <Pustaka
                dataBuku={formData}
            />
        </div>
    )
}

export default Form