import { LoginForm } from './LoginForm';

export default function Login() {
    return (
        <div className="py-36">
            <div className="mx-auto rounded-xl py-12 px-11 w-1/4 h-fit bg-blue-100">
                <h3 className="font-bold text-7xl mb-6 text-center">
                    GP
                    <span className="text-blue-700">Lab</span>
                </h3>
                <LoginForm />
            </div>
        </div>
    );
}
