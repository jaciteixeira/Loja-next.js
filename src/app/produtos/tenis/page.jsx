import Link from "next/link";
import Image from "next/image";

export default function tenis(){
    return(
        <div>
            <h1>TÊNIS</h1>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, distinctio ea! Facilis eligendi dolorum asperiores, hic, cupiditate possimus earum exercitationem unde fugit totam repudiandae itaque reiciendis quis at! Architecto, fuga!</p>
                <figure>
                    <Image src="/images/sneaker.png" 
                    width={320} height={320} 
                    alt="Tenis verde"></Image>
                    <figcaption>Tenis</figcaption>
                </figure>
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>
    )
}