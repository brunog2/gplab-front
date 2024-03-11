export default function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="rounded-xl py-12 px-11 w-1/4 h-fit bg-background flex items-center justify-center flex-col   gap-6 ">
        <p>GPLab</p>
        <input type="text" />
        <input type="password" />
        <input type="button" value="Entrar" />
      </div>
    </div>
  );
}
