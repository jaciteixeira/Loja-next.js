import Link from "next/link";
import Image from "next/image";

export default function Calca(){
    return(
        <div>
            <h1>CALÇA</h1>
            <div>
                <p>Aqui é a calça, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, distinctio ea! Facilis eligendi dolorum asperiores, hic, cupiditate possimus earum exercitationem unde fugit totam repudiandae itaque reiciendis quis at! Architecto, fuga!</p>
                <figure>
                    <Image src="/images/pants.jpg" 
                    width={320} height={320} 
                    alt="Pilha de calças dobradas"></Image>
                    <figcaption>Calças</figcaption>
                </figure>
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>
    )
}