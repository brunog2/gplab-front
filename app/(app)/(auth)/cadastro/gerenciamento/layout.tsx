export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-20">
            <h3 className="text-4xl font-bold text-blue-700">
                Tabela de usuários
            </h3>
            <div className="py-14">{children}</div>
        </div>
    );
}
