const Greet = () => {

  const myName = "John Doe";

  return (
    <div>
      <h1>Greetings! From Greet Component</h1>
      <p>Hi {myName}, Welcome</p>
      Current Date: {new Date().toLocaleDateString()}      
    </div>
  );
}

export default Greet;