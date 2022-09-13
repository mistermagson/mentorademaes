import profilePic from '../public/img/foto-sobre.jpeg'
import Image from "next/image";

export default function Sobre() {
    return (
        <>
            <div className="row mb-2 ">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col-auto d-lg-block">
                            <Image   src={profilePic} width="400" height="500" />
                        </div>
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Sobre Mim</h3>
                            <p className="card-text mb-auto">Poderia começar apresentando minha formação acadêmica, meus títulos e cursos, mas nada disso me ensinou, me transformou e me fez desabrochar como a maternidade fez.
                                Meus 3 filhos são a minha escola diária. Mais aprendo do que ensino. Cada um deles faz de mim uma pessoa melhor.
                                É desafiador ser o alimento, ser o abrigo, ser o único colo que acalma, ser enfermeira, motorista, professora, cozinheira... Consome muito de nós, mães.
                                E quando me disseram que a maternidade podia ser vivida com mais leveza eu confesso que não acreditei.
                                Afinal, como seria possível ser mais leve com 3 crianças menores de 4 anos???
                                Hoje, estou aqui pra te dizer, mamãe, que é possível, sim! Você pode viver a maternidade real, com menos culpa e muito mais leveza.
                                Vem, eu te ajudo!</p>
                        </div>
                    </div>
                         </div>

            </div>

        </>
            )

}