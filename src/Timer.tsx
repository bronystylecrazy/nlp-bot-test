export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>Timer</>;
}
