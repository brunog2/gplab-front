import { Button } from "@/src/ui/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ARTICLES = [
  {
    title: "Saúde mental",
    content:
      "Priorizar a saúde mental é essencial para o bem-estar integral. Cuidar da mente é tão importante quanto cuidar do corpo, promovendo equilíbrio emocional e qualidade de vida. Buscar apoio profissional e cultivar hábitos saudáveis de autocuidado são passos fundamentais para uma vida mentalmente saudável.",
  },
  {
    title: "Doenças cardiovasculares",
    content:
      "As doenças cardiovasculares representam uma preocupação global, afetando milhões de vidas a cada ano. Investir na prevenção, através de uma dieta equilibrada, exercícios regulares e controle do estresse, é crucial para proteger o coração e garantir uma vida plena.",
  },
  {
    title: "Recuperação cirúrgica: quanto tempo?",
    content:
      "A recuperação pós-cirúrgica é um período crucial que exige cuidados dedicados e apoio adequado. Seguir as orientações médicas, manter uma dieta nutritiva e praticar exercícios leves são passos essenciais para uma recuperação bem-sucedida.",
  },
];

export default function HomePage() {
  return (
    <div className="px-16">
      <div>
        <h3 className="font-bold text-4xl text-blue-700">Seja bem vindo(a)!</h3>

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
            <h4 className="font-bold text-3xl text-blue-700">Novidades</h4>

            <div className="mt-6 space-y-4">
              {ARTICLES.map((article, index) => (
                <div key={index}>
                  <article>
                    <h5 className="font-semibold text-xl text-blue-700">
                      {article.title}
                    </h5>
                    <p className="mt-1">{article.content}</p>
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
              <Link href={""}>
                <Button className="w-full">Agendar consulta</Button>
              </Link>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-3xl text-blue-700 mb-4">
                Verificar consultas agendadas
              </h4>
              <Link href={""}>
                <Button className="w-full">Consulta</Button>
              </Link>
            </div>
            <span className="w-full block relative aspect-[347/196]">
              <Image src={"/doctors@2x.png"} alt="doctors" fill />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
