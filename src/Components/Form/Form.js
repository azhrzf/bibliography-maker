import React from "react"
import Pustaka from "./Pustaka"

const Form = () => {
    const [formData, setFormData] = React.useState(
        {
            namaPenulis: "",
            penulisLain: {
                penulis2: false,
                penulis3: false,
                penulis4: false
            },
            namaPenulis2: "",
            namaPenulis3: "",
            namaPenulis4: "",
            tahunTerbit: "",
            judulBuku: "",
            tempatTerbit: "",
            namaPenerbit: "",
            kapitalOtomatis: false
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

    const tambahPenulis = () => {
        if (formData.penulisLain.penulis2 && formData.penulisLain.penulis3) {
            setFormData(prevState => {
                return {
                    ...prevState,
                    penulisLain: {
                        penulis2: true,
                        penulis3: true,
                        penulis4: true
                    }
                }
            })
        }
        else if (formData.penulisLain.penulis2) {
            setFormData(prevState => {
                return {
                    ...prevState,
                    penulisLain: {
                        penulis2: true,
                        penulis3: true,
                        penulis4: false
                    }
                }
            })
        }
        else {
            setFormData(prevState => {
                return {
                    ...prevState,
                    penulisLain: {
                        penulis2: true,
                        penulis3: false,
                        penulis4: false
                    }
                }
            })
        }
    }

    const hapusPenulis = (hapus) => {
        if (hapus === 2) {
            setFormData(prevState => {
                return {
                    ...prevState,
                    namaPenulis2: formData.namaPenulis3 ? formData.namaPenulis3 : "",
                    namaPenulis3: formData.namaPenulis4 ? formData.namaPenulis4 : "",
                    namaPenulis4: "",
                    penulisLain: {
                        penulis2: formData.penulisLain.penulis3 ? true : false,
                        penulis3: formData.penulisLain.penulis4 ? true : false,
                        penulis4: false
                    }
                }
            })
            console.log(formData)
        }
        else if (hapus === 3) {
            setFormData(prevState => {
                return {
                    ...prevState,
                    namaPenulis3: formData.namaPenulis4 ? formData.namaPenulis4 : "",
                    namaPenulis4: "",
                    penulisLain: {
                        penulis2: true,
                        penulis3: formData.penulisLain.penulis4 ? true : false,
                        penulis4: false
                    }
                }
            })
            console.log(formData)
        }
        else if (hapus === 4) {
            setFormData(prevState => {
                return {
                    ...prevState,
                    namaPenulis4: "",
                    penulisLain: {
                        penulis2: true,
                        penulis3: true,
                        penulis4: false
                    }
                }
            })
            console.log(formData)
        }
    }

    return (
        <div className="form">
            <form>
                <input
                    
                    type="text"
                    placeholder="Nama Penulis"
                    name="namaPenulis"
                    onChange={handleChange}
                    value={formData.namaPenulis}
                    required
                />
                <input
                    
                    onClick={tambahPenulis}
                    type={formData.penulisLain.penulis4 ? "hidden" : "button"}
                    value="Tambah Penulis"
                />
                <input
                    
                    type={formData.penulisLain.penulis2 ? "text" : "hidden"}
                    placeholder="Nama Penulis 2"
                    name="namaPenulis2"
                    onChange={handleChange}
                    value={formData.namaPenulis2}
                    required
                />
                <input
                    
                    onClick={() => hapusPenulis(2)}
                    type={formData.penulisLain.penulis2 ? "button" : "hidden"}
                    value="Hapus"
                />
                <input
                    
                    type={formData.penulisLain.penulis3 ? "text" : "hidden"}
                    placeholder="Nama Penulis 3"
                    name="namaPenulis3"
                    onChange={handleChange}
                    value={formData.namaPenulis3}
                    required
                />
                <input
                    
                    onClick={() => hapusPenulis(3)}
                    type={formData.penulisLain.penulis3 ? "button" : "hidden"}
                    value="Hapus"
                />
                <input
                    
                    type={formData.penulisLain.penulis4 ? "text" : "hidden"}
                    placeholder="Nama Penulis 4"
                    name="namaPenulis4"
                    onChange={handleChange}
                    value={formData.namaPenulis4}
                    required
                />
                <input
                    
                    onClick={() => hapusPenulis(4)}
                    type={formData.penulisLain.penulis4 ? "button" : "hidden"}
                    value="Hapus"
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
                <input
                    
                    type="checkbox"
                    id="kapitalOtomatis"
                    onChange={handleChange}
                    checked={formData.kapitalOtomatis}
                    name="kapitalOtomatis"
                />
                <label htmlFor="kapitalOtomatis">Kapital Otomatis</label>
            </form>
            <Pustaka
                dataBuku={formData}
            />
        </div>
    )
}

export default Form