import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from './GifGridItem'

const GifGrid = ({category: cat, delete: del}) => {

  const { loading, data: images } = useFetchGifs(cat);

  return (

    <div>

        <div className="bar">
          <h3>{cat}</h3>
        <span id="close" onClick = {() => del(cat)}>&times;</span>
        </div>

      {loading && <p>Cargando</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem {...img} key={img.id} />
        ))}
      </div>

    </div>

  );
};

export default GifGrid;