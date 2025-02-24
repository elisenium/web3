const Page = ({ title, children }) => {
    return (
      <section>
        <h1>{title}</h1>
        <div>
          {children}
        </div>
        <p>© Made by the Vinci team</p>
      </section>
    );
    };
    
    export default Page;