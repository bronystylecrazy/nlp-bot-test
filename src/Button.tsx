import React from "react";

export default function Button() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <button onClick={() => setCount((c) => c + 1)}>Click Me {count}</button>
  );
}
