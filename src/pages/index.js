import perfilPic from '../public/img/2.png'
import assinaturaPic from '../public/img/nome.png'
import Image from "next/image";

function HomePage() {
    return (
        <div class="container home">
            <section className="text-center">

                    <Image   src={perfilPic} width={400} height={400} class="rounded-circle"/>
                    <Image src={assinaturaPic} width={560} height={315} />

                    <p className="lead text-muted">Something short and leading about the collection below—its contents,
                        the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it
                        entirely.</p>
                    <p>
                        <a href="#" className="btn btn-primary my-2">Main call to action</a>
                        <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                    </p>

            </section>




        </div>
        )
}

export default HomePage