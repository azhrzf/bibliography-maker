import React from "react"
import PustakaLarik from "./PustakaLarik"

const Pustaka = ({ formData }) => {

    const [larikPustaka, setLarikPustaka] = React.useState([
    ])

    const otomatisKapital = (yangKapital, syaratKapital) => {
        if (syaratKapital) {
            let setelahKapital = ""
            const buatKapital = yangKapital.toString().trim()
            const kapitalBaru = buatKapital.split(" ").map(kapital => {
                return ((kapital === "dan") || (kapital === "dkk") ? kapital[0] : kapital[0].toUpperCase()) + kapital.slice(1, kapital.length)
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

    const inisialNama = (formData) => {
        let inisialNama = ""
        const buatInisial = formData.namaPenulis.toString().trim()
        const inisialBaru = buatInisial.split(" ").map(inisial => {
            return inisial[0] + inisial.slice(1, inisial.length).toLowerCase()
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
        if (formData.namaPenulis2 && formData.namaPenulis3 && formData.namaPenulis4) {
            return `${inisialNama} dkk`
        }
        else if (formData.namaPenulis2 && formData.namaPenulis3) {
            return `${inisialNama}. ${formData.namaPenulis2}., dan ${formData.namaPenulis3}`
        }
        else if (formData.namaPenulis2) {
            return `${inisialNama} dan ${formData.namaPenulis2}`
        }
        return inisialNama
    }

    const mainStyle = (formData) => {
        if (!(formData.namaPenulis && formData.tahunTerbit && formData.judulBuku && formData.tempatTerbit && formData.namaPenerbit)) {
            return "pustakaUn"
        }
    }

    const secondStyle = (formData) => {
        if (formData.namaPenulis || formData.tahunTerbit || formData.judulBuku || formData.tempatTerbit || formData.namaPenerbit) {
            return "pustaka"
        }
    }

    const tentukanPustaka = (namaPustaka, formData) => {
        if (namaPustaka === "namaPenulis") {
            return (formData.namaPenulis && `${otomatisKapital(inisialNama(formData), formData.kapitalOtomatis)}. `)
        }
        else if (namaPustaka === "tahunTerbit") {
            return (formData.tahunTerbit && `${formData.tahunTerbit}. `)
        }
        else if (namaPustaka === "judulBuku") {
            return (formData.judulBuku && `${otomatisKapital(formData.judulBuku, formData.kapitalOtomatis)}. `)
        }
        else if (namaPustaka === "tempatTerbit") {
            return (formData.tempatTerbit && `${otomatisKapital(formData.tempatTerbit, formData.kapitalOtomatis)}: `)
        }
        else if (namaPustaka === "namaPenerbit") {
            return (formData.namaPenerbit && `${otomatisKapital(formData.namaPenerbit, formData.kapitalOtomatis)}.`)
        }
    }

    const jadiPustaka = (formData) => {
        return <p className={mainStyle(formData)}>
            {tentukanPustaka("namaPenulis", formData)}
            {tentukanPustaka("tahunTerbit", formData)}
            <i>{tentukanPustaka("judulBuku", formData)}</i>
            {tentukanPustaka("tempatTerbit", formData)}
            {tentukanPustaka("namaPenerbit", formData)}
        </p>
    }

    const isiLarikPustaka = (formData) => {
        setLarikPustaka(larikSebelumnya => [...larikSebelumnya,
        {
            key: new Date().getTime(),
            namaPenulis: tentukanPustaka("namaPenulis", formData),
            tahunTerbit: tentukanPustaka("tahunTerbit", formData),
            judulBuku: tentukanPustaka("judulBuku", formData),
            tempatTerbit: tentukanPustaka("tempatTerbit", formData),
            namaPenerbit: tentukanPustaka("namaPenerbit", formData),
        }
        ].sort((a, b) => (a.namaPenulis > b.namaPenulis) ? 1 : ((b.namaPenulis > a.namaPenulis) ? -1 : 0)))
    }

    const hapusPustaka = (timestamp) => {
        console.log(larikPustaka)
        setLarikPustaka(larikSebelumnya => larikSebelumnya.filter((larik) => {
            return larik.key !== timestamp
        }))
    }

    return (
        <div>
            <div className={secondStyle(formData)}>
                {jadiPustaka(formData)}
                <input type={mainStyle(formData) === "pustakaUn" ? "hidden" : "button"} onClick={() => isiLarikPustaka(formData)} value="Tambahkan" />
            </div>
            <div className={larikPustaka[0] && "larikPustaka"}>
                <PustakaLarik larikPustaka={larikPustaka} hapusPustaka={hapusPustaka}/>
                {/* <input type={larikPustaka[0] ? "button" : "hidden"} value="Kopi Semua"/> */}
            </div>
        </div>
    )
}

export default Pustaka