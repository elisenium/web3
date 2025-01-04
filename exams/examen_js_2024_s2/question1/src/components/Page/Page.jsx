const Page = ({ title, children }) => {
return (
  <section>
    <h1>{title}</h1>
    <div>
      {children}
    </div>
  </section>
);
};

export default Page;