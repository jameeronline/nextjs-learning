const layout = ({ params, children }) => {
  return (
    <>
      <div>layout {params.postId}</div>
      {children}
    </>
  );
};

export default layout;
