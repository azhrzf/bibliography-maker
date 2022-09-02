import React from "react"

const PustakaLarik = ({ larikPustaka, hapusPustaka}) => {
    return (
        larikPustaka.map(larik => {
            return (
                <div className="isiLarikPustaka">
                    <p>{`${larik.namaPenulis} ${larik.tahunTerbit}`} <i>{`${larik.judulBuku}`}</i> {`${larik.tempatTerbit} ${larik.namaPenerbit}`}</p>
                    <input onClick={() => hapusPustaka(larik.key)} type="button" value="Hapus" />
                </div>
            )
        })
    )
}

export default PustakaLarik