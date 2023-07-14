const Boards = ({ boards }) => (
    <>
      <h1>Boards</h1>
      {boards.map((board, i) => (
        <div key={i}>
          <h1>{board.title}</h1>
        </div>
      ))}
    </>
  );
  

  export default Boards