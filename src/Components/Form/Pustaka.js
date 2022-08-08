import React from "react"

const Pustaka = ({ namaPenulis, tahunTerbit, judulBuku, tempatTerbit, namaPenerbit }) => {

    const inisialNama = (namaPenulis) => {
        let inisialNama = ""
        const buatInisial = namaPenulis.toString().trim()
        const inisialBaru = buatInisial.split(" ")
        if (inisialBaru.length > 1) {
            inisialNama = `${inisialBaru[inisialBaru.length - 1]},`
            for (let i = 0; i < inisialBaru.length - 1; i++) {
                inisialNama = (inisialNama + ` ${inisialBaru[i]}`).trim()
            }
        }
        else {
            inisialNama = namaPenulis.trim()
        }
        return inisialNama
    }
    
    return (
        <div>
            <p> {namaPenulis && `${inisialNama(namaPenulis)}. `}
                {tahunTerbit && `${tahunTerbit}. `}
                <i>{judulBuku && `${judulBuku}. `}</i>
                {tempatTerbit && `${tempatTerbit}: `}
                {namaPenerbit && `${namaPenerbit}.`}
            </p>
        </div>
    )
}

export default Pustaka