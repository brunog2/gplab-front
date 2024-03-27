import { ArrowRight } from "@/src/ui/components/icons/ArrowRight";
import Image from "next/image";
import Link from "next/link";

const LandingPage: React.FC = () => {
  const avatars = [7, 8, 9, 10, 11, 12];

  return (
    <div>
      <div className="bg-lavender">
        <header className="px-4 py-12 flex justify-between items-center container mx-auto">
          <h1 className="font-bold text-3xl">
            GP
            <span className="text-blue-700">Lab</span>
          </h1>

          <div className="flex gap-8 text-xl [&>a:hover]:underline [&>a:hover]:text-blue-700">
            <Link href={""}>Início</Link>
            <Link href={""}>Sobre</Link>
            <Link href={""}>Aplicação</Link>
            <Link href={""}>História</Link>
          </div>

          <div className="flex gap-5 items-center">
            <Link
              href={"/login"}
              className="px-7 py-3 rounded-full border-2 border-blue-700 text-blue-700 font-bold text-xl"
            >
              Entrar
            </Link>
            <Link
              href={"/cadastro/usuario"}
              className="px-7 py-3 rounded-full bg-blue-700 text-white font-bold text-xl"
            >
              Cadastrar
            </Link>
          </div>
        </header>

        <section className="px-4 py-28 container mx-auto relative overflow-hidden">
          <div className="max-w-md relative z-30">
            <h2 className="font-bold text-6xl">
              Sua <span className="text-blue-700">saúde</span> com mais
              facilidade
            </h2>
            <p className="pt-24">
              Simplificamos o agendamento de consultas médicas, proporcionando
              conveniência e controle para sua saúde. Marque suas consultas com
              facilidade e gerencie seu bem-estar de forma eficiente!
            </p>
            <div className="mt-20 rounded-full bg-white flex gap-4 items-center px-8 py-2">
              <select />
              <select />
              <button className="cursor-pointer ml-auto">
                <Image alt="" src="/frame-3.svg" width={56} height={56} />
              </button>
            </div>
            <Image
              className="absolute top-24 left-0"
              alt=""
              src="/vector-5.svg"
              width={278}
              height={20}
            />
          </div>

          <span>
            <span className="bg-[#A5CCFF] w-full max-w-3xl aspect-square rounded-full absolute right-0 -bottom-1/2" />
            <Image
              className="absolute bottom-0 right-0"
              alt="Doctors"
              src="/doctors@2x.png"
              width={797}
              height={494}
            />
          </span>
        </section>

        <section className="bg-blue-700">
          <div className="container mx-auto py-4 px-4 flex gap-10 items-center">
            <div className="text-center text-white">
              <p className="font-bold text-6xl">24/7</p>
              <p>Suporte Online</p>
            </div>
            <span className="w-px h-14 bg-white" />
            <div className="text-center text-white">
              <p className="font-bold text-6xl">100+</p>
              <p>Doutores</p>
            </div>
            <span className="w-px h-14 bg-white" />
            <div className="text-center text-white">
              <p className="font-bold text-6xl">1M+</p>
              <p>Pacientes cadastrados</p>
            </div>
          </div>
        </section>
      </div>

      <section className="pt-36">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-5xl mb-10">
            Algumas das nossas especialidades
          </h2>

          <div
            className="[&>div:hover]:bg-blue-700 [&>div:hover]:text-white [&>div:hover]:border-blue-700 [&>div:hover]:transition-colors
                                        grid grid-cols-2 lg:grid-cols-4 gap-5"
          >
            <div className="py-10 px-7 border-2 border-gray-800 rounded-3xl">
              <span className="w-20 aspect-square rounded-full bg-blue-100 grid place-content-center">
                <Image src={"/covid.svg"} alt="covid" width={45} height={45} />
              </span>
              <h3 className="font-bold text-2xl mt-3 mb-2">Teste Covid-19</h3>
              <p>Teste disponível para o vírus Covid-19 e resultado rápido</p>
            </div>
            <div className="py-10 px-7 border-2 border-gray-800 rounded-3xl">
              <span className="w-20 aspect-square rounded-full bg-blue-100 grid place-content-center">
                <Image src={"/lungs.svg"} alt="covid" width={45} height={45} />
              </span>
              <h3 className="font-bold text-2xl mt-3 mb-2">Coração, pulmões</h3>
              <p>
                Temos os melhores profissionais atuando nos setores, além do
                melhor equipamento disponível para sua comodidade.
              </p>
            </div>
            <div className="py-10 px-7 border-2 border-gray-800 rounded-3xl">
              <span className="w-20 aspect-square rounded-full bg-blue-100 grid place-content-center">
                <Image
                  src={"/suppliment.svg"}
                  alt="covid"
                  width={45}
                  height={45}
                />
              </span>
              <h3 className="font-bold text-2xl mt-3 mb-2">Alimentação</h3>
              <p>
                Cuide da sua alimentação através dos nossos roteiros disponíveis
                por profissionais altamente qualificados.
              </p>
            </div>
            <div className="py-10 px-7 border-2 border-gray-800 rounded-3xl">
              <span className="w-20 aspect-square rounded-full bg-blue-100 grid place-content-center">
                <Image src={"/mental.svg"} alt="covid" width={45} height={45} />
              </span>
              <h3 className="font-bold text-2xl mt-3 mb-2">Saúde mental</h3>
              <p>
                Sua saúde mental é muito importanta para nós, venha conhecer
                nossos programas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-36">
        <div className="container mx-auto px-4 flex gap-20 flex-col lg:flex-row items-center">
          <Image
            src={"/rectangle-11@2x.png"}
            alt="doctors"
            width={530}
            height={306}
          />

          <div className="flex-[3]">
            <h3 className="font-bold text-5xl">Por que nos escolher?</h3>

            <ul className="text-gray-700 mt-8 space-y-2 mb-8 list-image-[url('/check.svg')] [&>li]:pl-2">
              <li>Profissionais altamente qualificados</li>
              <li>Equipamento de última ponta</li>
              <li>Facilidade e agilidade no agendamento de consultas</li>
              <li>Suporte disponível 24 horas durante os 7 dias da semana</li>
              <li>Melhores preços disponíveis no mercado</li>
            </ul>
            <Link
              href={""}
              className="text-blue-700 font-medium flex gap-2 items-center"
            >
              Veja mais
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-36 py-40 bg-lavender">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-28">
          <div className="flex-1">
            <h3 className="font-bold text-5xl">
              O que
              <span className="text-blue-700"> nossos membros </span>
              falam sobre nós
            </h3>
            <p className="pt-5">
              Veja e avalie você mesmo dentro de uma gama de comentários falando
              sobre a plataforma!
            </p>

            <div className="flex mt-8 items-center">
              {avatars.map((num) => (
                <Image
                  className="-ml-4"
                  key={num}
                  alt="user"
                  src={`/ellipse-${num}@2x.png`}
                  width={52}
                  height={52}
                />
              ))}
              <p className="font-semibold ml-6">100+ avaliações</p>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-3xl py-11 px-14 bg-white border-2 border-gray-300">
              <div className="flex justify-between">
                <div className="grid grid-cols-[52px_auto] grid-rows-2 gap-x-4 gap-y-1">
                  <Image
                    className="row-span-2"
                    alt="user"
                    src={`/ellipse-7@2x.png`}
                    width={52}
                    height={52}
                  />
                  <h4 className="font-semibold">Jane Cooper</h4>
                  <span className="text-xs text-gray-600">16/12/2023</span>
                </div>
                <span className="flex gap-2">
                  {new Array(5).fill(0).map((_, index) => (
                    <Image
                      key={index}
                      alt="user"
                      src={`/star-1.svg`}
                      width={40}
                      height={40}
                    />
                  ))}
                </span>
              </div>
              <p className="mt-10">
                Um sistema perfeito e extremamente prático para ser utilizado,
                bastou apenas alguns cliques e minha consulta já estava marcada.
                Além de terem sido atenciosos em todas as etapas!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-36">
        <div className="container mx-auto px-4 flex gap-16 flex-col lg:flex-row">
          <div className="">
            <h3 className="text-5xl font-bold">
              O futuro da
              <span className="text-blue-700"> saúde de qualidade</span>
            </h3>
            <span className="space-y-2 mt-10 block mb-6">
              <p>
                A qualidade da saúde é um conceito abrangente que engloba
                diversos aspectos do bem-estar físico, mental e social de um
                indivíduo. Envolve não apenas a ausência de doenças, mas também
                a capacidade de viver uma vida plena e satisfatória. Uma parte
                essencial da qualidade da saúde é a prevenção, que inclui
                hábitos saudáveis de vida, como uma alimentação equilibrada,
                exercícios físicos regulares e a evitação de comportamentos de
                risco, como fumar e consumir álcool em excesso.
              </p>
              <p>
                Além disso, a qualidade da saúde também está relacionada ao
                acesso a serviços de saúde adequados e oportunos. Isso inclui a
                disponibilidade de profissionais qualificados, instalações
                médicas modernas e acesso a medicamentos essenciais. O acesso
                equitativo a cuidados de saúde é fundamental para garantir que
                todas as pessoas tenham a oportunidade de alcançar e manter um
                bom estado de saúde, independentemente de sua origem
                socioeconômica, localização geográfica ou outros fatores.
              </p>
              <p>
                Por fim, a qualidade da saúde é inseparável do contexto social e
                ambiental em que vivemos. Ela reflete não apenas a
                disponibilidade de serviços de saúde, mas também a igualdade de
                acesso a esses serviços e a presença de condições que promovam
                estilos de vida saudáveis.
              </p>
            </span>

            <Link
              href={""}
              className="text-blue-700 font-medium flex gap-2 items-center"
            >
              Learn More
              <ArrowRight />
            </Link>
          </div>

          <Image
            alt="doctor"
            src={`/rectangle-15@2x.png`}
            width={666}
            height={460}
          />
        </div>
      </section>

      <section className="py-36">
        <div className="container mx-auto px-4 ">
          <div className="bg-blue-700 py-20 px-28 rounded-3xl">
            <h3 className="font-semibold text-4xl text-white text-center">
              Inscreva-se em nossa caixa de e-mail
            </h3>

            <span className="flex gap-2 px-4 rounded-full bg-white overflow-hidden mt-8">
              <input
                type="text"
                className="appearance-none focus:outline-none w-full px-2 py-4 text-lg"
              />
              <button className="bg-blue-700 my-4 rounded-full p-4 text-white">
                <ArrowRight />
              </button>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
