const bicicletas = [
{ titulo:"playa", id:1},
{ titulo:"ruta", id:2},
{ titulo:"montana", id:3}
]

export default function Lista(){
    const listaBicis = bicicletas.map(bici =>
        <li key={bici.id}
            style={{
            color: bici.titulo === "montana" ? 'magenta' : 'darkgreen'
        }}
        >{bici.titulo}
        </li>
    );
    
    return(
        <ul>{listaBicis}</ul>
    )
}


