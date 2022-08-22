import React from "react"

const SetPustaka = (Pustaka) => {
    const fullPustaka = `${Pustaka.namaPenulis} ${Pustaka.tahunTerbit} ${Pustaka.judulBuku} ${Pustaka.tempatTerbit} ${Pustaka.namaPenerbit}`
    return (
        <p style={{color:"red"}}>{fullPustaka}</p>
    )
}

export default SetPustaka