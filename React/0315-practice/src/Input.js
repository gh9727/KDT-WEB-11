function Input({ setData }) {
  return (
    <>
      내용 :
      <input
        type="text"
        onChange={(e) => {
          setData((data) => {
            return { ...data, content: e.target.value };
          });
        }}
      />
    </>
  );
}
export default Input;
