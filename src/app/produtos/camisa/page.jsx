import Link from "next/link";
import Image from "next/image";

export default function Camisa(){
    return(
        <div>
            <h1>CAMISA</h1>
            <div>
                <p>Aqui é a camisa, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, distinctio ea! Facilis eligendi dolorum asperiores, hic, cupiditate possimus earum exercitationem unde fugit totam repudiandae itaque reiciendis quis at! Architecto, fuga!</p>
                <figure>
                    <Image src="/images/tshirt.png" 
                    width={320} height={320} 
                    alt="Camiseta verde"></Image>
                    <figcaption>Camiseta</figcaption>
                </figure>
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>
    )
}