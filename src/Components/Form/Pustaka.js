import React from "react"

const Pustaka = ({ dataBuku }) => {

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

    const inisialNama = (dataBuku) => {
        let inisialNama = ""
        const buatInisial = dataBuku.namaPenulis.toString().trim()
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
        if (dataBuku.namaPenulis2 && dataBuku.namaPenulis3 && dataBuku.namaPenulis4) {
            return `${inisialNama} dkk`
        }
        else if (dataBuku.namaPenulis2 && dataBuku.namaPenulis3) {
            return `${inisialNama}. ${dataBuku.namaPenulis2}., dan ${dataBuku.namaPenulis3}`
        }
        else if (dataBuku.namaPenulis2) {
            return `${inisialNama} dan ${dataBuku.namaPenulis2}`
        }
        return inisialNama
    }

    const mainStyle = (dataBuku) => {
        if (dataBuku.namaPenulis && dataBuku.tahunTerbit && dataBuku.judulBuku && dataBuku.tempatTerbit && dataBuku.namaPenerbit) {
            return {
                color: "black"
            }
        }
        return {
            color: "red"
        }
    }

    const secondStyle = (dataBuku) => { 
        if (dataBuku.namaPenulis || dataBuku.tahunTerbit || dataBuku.judulBuku || dataBuku.tempatTerbit || dataBuku.namaPenerbit) {
            return "pustaka"
        }
    }

    return (
        <div className={secondStyle(dataBuku)}>
            <p style={mainStyle(dataBuku)}> {jadiPustaka(dataBuku)}</p>
            {larikPustaka.map(larik => {
                return <p>{`${larik.namaPenulis} ${larik.tahunTerbit}`} <i>{`${larik.judulBuku}`}</i> {`${larik.tempatTerbit} ${larik.namaPenerbit}`}</p>
            })}
            <button type="button" onClick={() => isiLarikPustaka(dataBuku)}>Button</button>
        </div>
    )
}

export default Pustaka