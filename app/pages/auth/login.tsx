import _ from "lodash"

export async function clientLoader() {
  const res = await new Promise((res) => {
    setTimeout(() => {
      res("My data");
    }, 10000);
  });

  return res;
}

export default function Login() {
  const array = [1, 2, 3, 4, 5];
  const shuffled = _.shuffle(array);

  return (
    <div>
      <div>Shuffled: {shuffled.join(', ')}</div>;
      <h1>Look ma!</h1>
      <p>I am login page</p>
    </div>
  );
}
