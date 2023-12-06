import React from "react";

interface ButtonProps {
  onClick: () => void;
}

export default function TestButton(props: ButtonProps) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <button onClick={() => setCount(c + 1)}>Click Me {count} time. </button>
  );
}
