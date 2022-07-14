export const Lists = ({e, deleteTodo}) => {
    // console.log(e)
    return (
        <div style={{color: "blue", display: "flex", marginLeft: "40%", marginRight: "30%", justifyContent: "space-between"}}>
            <p>{e.todo}</p>
            <p style={{color: "green"}}>{Math.floor(Math.random()*12)} hours left </p>
            <button onClick={() => {deleteTodo(e.id)}}>🗑️</button>
        </div>
    )
}