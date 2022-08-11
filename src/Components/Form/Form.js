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
        const { name, value } = event.target
        
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
                [name]: name === "tahunTerbit" ? checkTahunTerbit : value
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
                    type="number"
                    placeholder="Tahun Terbit"
                    name="tahunTerbit"
                    onChange={handleChange}
                    value={formData.tahunTerbit}
                    required
                />
                <input
                    type="text"
                    placeholder="Judul Buku"
                    name="judulBuku"
                    onChange={handleChange}
                    value={formData.judulBuku}
                    required
                />
                <input
                    type="text"
                    placeholder="Tempat Terbit"
                    name="tempatTerbit"
                    onChange={handleChange}
                    value={formData.tempatTerbit}
                    required
                />
                <input
                    type="text"
                    placeholder="Nama Penerbit"
                    name="namaPenerbit"
                    onChange={handleChange}
                    value={formData.namaPenerbit}
                    required
                />
            </form>
            <Pustaka
                dataBuku={formData}
            />
        </div>
    )
}

export default Form