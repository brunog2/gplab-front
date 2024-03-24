import { Button } from '@/src/ui/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ARTICLES = [
    {
        title: 'Assunto',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.',
    },
    {
        title: 'Assunto',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.',
    },
    {
        title: 'Assunto',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.',
    },
];

export default function HomePage() {
    return (
        <div className="px-16">
            <div>
                <h3 className="font-bold text-4xl text-blue-700">
                    Seja bem vindo(a)!
                </h3>

                <div>
                    <h4 className="font-bold text-3xl text-blue-700 mt-14">
                        Como podemos te auxiliar hoje?
                    </h4>

                    <span className="flex gap-2 px-4 rounded-full bg-gray-200 overflow-hidden mt-8">
                        <input
                            type="text"
                            className="appearance-none bg-transparent focus:outline-none w-full px-2 py-4 text-lg"
                        />
                        <button className="bg-blue-700 my-4 rounded-full p-4 text-white">
                            <ArrowRight />
                        </button>
                    </span>
                </div>
            </div>

            <section className="mt-14">
                <div className="flex flex-col xl:flex-row gap-20">
                    <div className="flex-1 pb-10">
                        <h4 className="font-bold text-3xl text-blue-700">
                            Novidades
                        </h4>

                        <div className="mt-6 space-y-4">
                            {ARTICLES.map((article, index) => (
                                <div key={index}>
                                    <article>
                                        <h5 className="font-semibold text-xl text-blue-700">
                                            {article.title}
                                        </h5>
                                        <p className="mt-1">
                                            {article.content}
                                        </p>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4 className="font-bold text-3xl text-blue-700 mb-4">
                                Agende sua consulta agora mesmo
                            </h4>
                            <Link href={''}>
                                <Button className="w-full">
                                    Agendar consulta
                                </Button>
                            </Link>
                        </div>
                        <div className="mt-6">
                            <h4 className="font-bold text-3xl text-blue-700 mb-4">
                                Verificar consultas agendadas
                            </h4>
                            <Link href={''}>
                                <Button className="w-full">Consulta</Button>
                            </Link>
                        </div>
                        <span className="w-full block relative aspect-[347/196]">
                            <Image src={'/doctors@2x.png'} alt="doctors" fill />
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}
