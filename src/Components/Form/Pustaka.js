import React from "react"

const Pustaka = ({ dataBuku }) => {

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
        if (!(dataBuku.namaPenulis && dataBuku.tahunTerbit && dataBuku.judulBuku && dataBuku.tempatTerbit && dataBuku.namaPenerbit)) {
            return "pustakaUn"
        }
    }

    const secondStyle = (dataBuku) => {
        if (dataBuku.namaPenulis || dataBuku.tahunTerbit || dataBuku.judulBuku || dataBuku.tempatTerbit || dataBuku.namaPenerbit) {
            return "pustaka"
        }
    }

    const tentukanPustaka = (namaPustaka, dataBuku) => {
        if (namaPustaka === "namaPenulis") {
            return (dataBuku.namaPenulis && `${otomatisKapital(inisialNama(dataBuku), dataBuku.kapitalOtomatis)}. `)
        }
        else if (namaPustaka === "tahunTerbit") {
            return (dataBuku.tahunTerbit && `(${dataBuku.tahunTerbit}). `)
        }
        else if (namaPustaka === "judulBuku") {
            return (dataBuku.judulBuku && `${otomatisKapital(dataBuku.judulBuku, dataBuku.kapitalOtomatis)}. `)
        }
        else if (namaPustaka === "tempatTerbit") {
            return (dataBuku.tempatTerbit && `${otomatisKapital(dataBuku.tempatTerbit, dataBuku.kapitalOtomatis)}: `)
        }
        else if (namaPustaka === "namaPenerbit") {
            return (dataBuku.namaPenerbit && `${otomatisKapital(dataBuku.namaPenerbit, dataBuku.kapitalOtomatis)}.`)
        }
    }

    const jadiPustaka = (dataBuku) => {
        return <p className={mainStyle(dataBuku)}>
            {dataBuku.namaPenulis && `${otomatisKapital(inisialNama(dataBuku), dataBuku.kapitalOtomatis)}. `}
            {dataBuku.tahunTerbit && `(${dataBuku.tahunTerbit}). `}
            <i>{dataBuku.judulBuku && `${otomatisKapital(dataBuku.judulBuku, dataBuku.kapitalOtomatis)}. `}</i>
            {dataBuku.tempatTerbit && `${otomatisKapital(dataBuku.tempatTerbit, dataBuku.kapitalOtomatis)}: `}
            {dataBuku.namaPenerbit && `${otomatisKapital(dataBuku.namaPenerbit, dataBuku.kapitalOtomatis)}.`}
        </p>
    }

    const isiLarikPustaka = (dataBuku) => {
        setLarikPustaka(larikSebelumnya => [...larikSebelumnya,
        {
            namaPenulis: tentukanPustaka("namaPenulis", dataBuku),
            tahunTerbit: tentukanPustaka("tahunTerbit", dataBuku),
            judulBuku: tentukanPustaka("judulBuku", dataBuku),
            tempatTerbit: tentukanPustaka("tempatTerbit", dataBuku),
            namaPenerbit: tentukanPustaka("namaPenerbit", dataBuku),
        }
        ].sort((a, b) => (a.namaPenulis > b.namaPenulis) ? 1 : ((b.namaPenulis > a.namaPenulis) ? -1 : 0)))
        console.log(larikPustaka)
    }

    return (
        <div>
            <div className={secondStyle(dataBuku)}>
                {jadiPustaka(dataBuku)}
                <input type={mainStyle(dataBuku) === "pustakaUn" ? "hidden" : "button"} onClick={() => isiLarikPustaka(dataBuku)} value="Tambahkan" />
            </div>
            <div className={larikPustaka[0] && "larikPustaka"}>
                {larikPustaka.map(larik => {
                    return <p>{`${larik.namaPenulis} ${larik.tahunTerbit}`} <i>{`${larik.judulBuku}`}</i> {`${larik.tempatTerbit} ${larik.namaPenerbit}`}</p>
                })}
            </div>
        </div>
    )
}

export default Pustaka