import Link from "next/link"
import Image from "next/image";

export default function Meia(){
    return(
        <div>
            <h1>MEIA</h1>
            <div>
                <p>Aqui é a MEIA, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, distinctio ea! Facilis eligendi dolorum asperiores, hic, cupiditate possimus earum exercitationem unde fugit totam repudiandae itaque reiciendis quis at! Architecto, fuga!</p>
                <figure>
                    <Image src="/images/socks.jpg" 
                    width={320} height={320} 
                    alt="três meias"></Image>
                    <figcaption>Meias</figcaption>
                </figure>
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>
    )
}