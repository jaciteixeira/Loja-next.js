import Link from "next/link"

export default function Cabecalho(){
    return(
        
        <div>
            <h2>PRODUTOS DISPONÍVEIS</h2>
            <ul>
            <li><Link href="/produtos/tenis">TÊNIS</Link></li>
            <li><Link href="/produtos/meia">MEIA</Link></li>
            <li><Link href="/produtos/calca">CALÇA</Link></li>
            <li><Link href="/produtos/camisa">CAMISA</Link></li>
            </ul>
        </div>
        
    )
}