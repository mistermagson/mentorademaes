import sobrePic from '../public/img/foto-sobre.jpeg'
import Image from "next/image";

export default function Sobre() {
    return (
        <div >

            <div class="row featurette">
                <div class="offset-1"></div>
                    <div class="col-md-6 offset-1">
                        <h2 class="featurette-heading fw-normal lh-1">Sobre Mim. <span class="text-muted">Só um pouco...</span></h2>
                        <p class="lead">Poderia começar apresentando minha formação acadêmica, meus títulos e cursos, mas nada disso me ensinou, me transformou e me fez desabrochar como a maternidade fez.
                            Meus 3 filhos são a minha escola diária. Mais aprendo do que ensino. Cada um deles faz de mim uma pessoa melhor.
                            É desafiador ser o alimento, ser o abrigo, ser o único colo que acalma, ser enfermeira, motorista, professora, cozinheira... Consome muito de nós, mães.
                            E quando me disseram que a maternidade podia ser vivida com mais leveza eu confesso que não acreditei.
                            Afinal, como seria possível ser mais leve com 3 crianças menores de 4 anos???
                            Hoje, estou aqui pra te dizer, mamãe, que é possível, sim! Você pode viver a maternidade real, com menos culpa e muito mais leveza.
                            Vem, eu te ajudo!</p>
                    </div>
                    <div class="col-md-5">
                        <Image src={sobrePic} width="400" height="500" class="rounded" />
                    </div>
            </div>

        </div>
            )

}