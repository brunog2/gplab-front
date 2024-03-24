'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
    const isAuthenticated: boolean = true;

    return (
        <header className="px-10 py-12 flex">
            <div className="ml-auto flex gap-6 items-center">
                {isAuthenticated ? (
                    <Link
                        href={'/login'}
                        className="px-7 py-3 rounded-full border-2 border-blue-700 text-blue-700 font-bold text-xl"
                    >
                        Entrar
                    </Link>
                ) : (
                    <>
                        <Link href={''}>
                            <Image
                                src="/user-male@3x.png"
                                alt="User"
                                width={48}
                                height={62}
                            />
                        </Link>
                        <Link href={''}>
                            <Image
                                src="/gear@3x.png"
                                alt="Gear"
                                width={48}
                                height={62}
                            />
                        </Link>
                        <Link href={''}>
                            <Image
                                src="/logout@3x.png"
                                alt="Logout"
                                width={48}
                                height={62}
                            />
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
