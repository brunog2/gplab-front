import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-700 text-white">
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-36 gap-y-14">
                    <div className="col-span-2">
                        <h4 className="font-semibold text-2xl">GPLab</h4>
                        <p className="mt-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nec risus feugiat lectus risus sed
                            ullamcorper. Auctor semper fermentum volutpat
                            integer vel. In rhoncus elementum nunc, malesuada mi
                            sed. Nibh est sit lobortis id semper.
                        </p>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="font-semibold text-2xl">Useful Links</h4>
                        <ul className="mt-8 font-medium">
                            <li>
                                <Link href={''}>About us</Link>
                            </li>
                            <li>
                                <Link href={''}>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href={''}>Our Mission</Link>
                            </li>
                            <li>
                                <Link href={''}>Our Team</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <h4 className="font-semibold text-2xl">Addresss</h4>
                        <Image
                            src={'/rectangle-18@2x.png'}
                            alt="map"
                            className="mt-8"
                            width={366}
                            height={160}
                        />
                    </div>
                </div>
            </div>
            <hr className="border-white container mx-auto px-4" />
            <span className="block py-6 text-center">
                © 2024 All Right Reserved
            </span>
        </footer>
    );
};
