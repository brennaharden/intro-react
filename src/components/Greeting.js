
function Greeting(props) {
    const newMap = props.users.map((user, index) => {
        return (
            <div className="user" key={index}>
                <h1>{user.name}</h1>
                <h2>This user is {user.age}.</h2>
            </div>
        )
    })
    return (
        <div>
            <h3>{props.person} from Greeting</h3>
            <h1>All the Users:</h1>
            {newMap}
        </div>
    )
}

export default Greeting