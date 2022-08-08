import React from "react"

const Pustaka = ({namaPenulis, tahunTerbit, judulBuku, tempatTerbit, namaPenerbit}) => {
    return (
        <div>
            <p>{`${namaPenulis}. (${tahunTerbit}). `}<i>{`${judulBuku}`}</i> {` . ${tempatTerbit}: ${namaPenerbit}.`}</p>
        </div>
    )
}

export default Pustaka