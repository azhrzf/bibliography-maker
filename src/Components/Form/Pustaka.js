import React from "react"

const Pustaka = ({ dataBuku }) => {

    const inisialNama = (dataBuku) => {
        let inisialNama = ""
        const buatInisial = dataBuku.namaPenulis.toString().trim()
        const inisialBaru = buatInisial.split(" ").map(inisial => {

            return inisial[0].toUpperCase() + inisial.slice(1, inisial.length).toLowerCase()
        })
        if (inisialBaru.length > 1) {
            inisialNama = `${inisialBaru[inisialBaru.length - 1]},`
            for (let i = 0; i < inisialBaru.length - 1; i++) {
                inisialNama = (inisialNama + ` ${inisialBaru[i]}`).trim()
            }
        }
        else {
            inisialNama = inisialBaru[0].trim()
        }
        return inisialNama
    }

    return (
        <div>
            <p> {dataBuku.namaPenulis && `${inisialNama(dataBuku)}. `}
                {dataBuku.tahunTerbit && `(${dataBuku.tahunTerbit}). `}
                <i>{dataBuku.judulBuku && `${dataBuku.judulBuku}. `}</i>
                {dataBuku.tempatTerbit && `${dataBuku.tempatTerbit}: `}
                {dataBuku.namaPenerbit && `${dataBuku.namaPenerbit}.`}
            </p>
        </div>
    )
}

export default Pustaka