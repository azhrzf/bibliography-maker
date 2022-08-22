import React from "react"
// import SetPustaka from "./SetPustaka"

const Pustaka = ({ dataBuku }) => {

    const otomatisKapital = (yangKapital, syaratKapital) => {
        if (syaratKapital) {
            let setelahKapital = ""
            const buatKapital = yangKapital.toString().trim()
            const kapitalBaru = buatKapital.split(" ").map(kapital => {
                return kapital[0].toUpperCase() + kapital.slice(1, kapital.length).toLowerCase()
            })
            if (kapitalBaru.length > 1) {
                for (let i = 0; i < kapitalBaru.length; i++) {
                    setelahKapital = (setelahKapital + ` ${kapitalBaru[i]}`).trim()
                }
            }
            else {
                setelahKapital = kapitalBaru[0].trim()
            }
            return setelahKapital
        }
        return yangKapital
    }

    const inisialNama = (dataBuku) => {
        let inisialNama = ""
        const buatInisial = dataBuku.namaPenulis.toString().trim()
        const inisialBaru = buatInisial.split(" ").map(inisial => {
            return (dataBuku.namaKapital ? inisial[0].toUpperCase() : inisial[0]) + inisial.slice(1, inisial.length).toLowerCase()
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
            {/* <SetPustaka
                namaPenulis={`${inisialNama(dataBuku)}. `}
                tahunTerbit={`(${dataBuku.tahunTerbit}). `}
                judulBuku={`${otomatisKapital(dataBuku.judulBuku, dataBuku.bukuKapital)}. `}
                tempatTerbit={`${otomatisKapital(dataBuku.tempatTerbit, dataBuku.tempatKapital)}: `}
                namaPenerbit={`${otomatisKapital(dataBuku.namaPenerbit, dataBuku.penerbitKapital)}.`}
            /> */}
            <p> {dataBuku.namaPenulis && `${inisialNama(dataBuku)}. `}
                {dataBuku.tahunTerbit && `(${dataBuku.tahunTerbit}). `}
                <i>{dataBuku.judulBuku && `${otomatisKapital(dataBuku.judulBuku, dataBuku.bukuKapital)}. `}</i>
                {dataBuku.tempatTerbit && `${otomatisKapital(dataBuku.tempatTerbit, dataBuku.tempatKapital)}: `}
                {dataBuku.namaPenerbit && `${otomatisKapital(dataBuku.namaPenerbit, dataBuku.penerbitKapital)}.`}
            </p>
        </div>
    )
}

export default Pustaka