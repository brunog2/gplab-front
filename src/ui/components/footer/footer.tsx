import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-36 gap-y-14">
          <div className="col-span-2">
            <h4 className="font-semibold text-2xl">GPLab</h4>
            <p className="mt-8">
              Com GPLab, sua jornada pela saúde se torna mais fácil e acessível
              - agende suas consultas médicas com praticidade e tranquilidade,
              colocando sua saúde em boas mãos.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-2xl">Links úteis</h4>
            <ul className="mt-8 font-medium">
              <li>
                <Link href={""}>Sobre nós</Link>
              </li>
              <li>
                <Link href={""}>Nossa política</Link>
              </li>
              <li>
                <Link href={""}>Nossa missão</Link>
              </li>
              <li>
                <Link href={""}>Nossa equipe</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="font-semibold text-2xl">Endereço</h4>
            <Image
              src={"/rectangle-18@2x.png"}
              alt="map"
              className="mt-8"
              width={366}
              height={160}
            />
          </div>
        </div>
      </div>
      <hr className="border-white container mx-auto px-4" />
      <span className="block py-6 text-center">© 2024 All Right Reserved</span>
    </footer>
  );
};
