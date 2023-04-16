const Category = (props) => {
  const { img, item, count } = props;

  return (
    <div>
      <div>
        <img src={img} alt="item" style={{ height: "15rem", width: "20rem", opacity: "0.7", borderRadius: "20px", background: "rgba(0, 0, 0, 0.6)"  }} />
      </div>
      <div style={{ fontSize: "1.2rem", color: "white" }}>
        <div>{item}</div>
        <div>{count}</div>
      </div>
    </div>
  );
};

export default Category;
