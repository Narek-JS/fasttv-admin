export async function clientLoader() {
  const res = await new Promise((res) => {
    setTimeout(() => {
      res("My data");
    }, 5000);
  });

  return res;
}

export default function Login() {
  return (
    <div>
      <h1>Look ma!</h1>
      <p>I am login page</p>
    </div>
  );
}
