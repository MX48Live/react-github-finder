import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import { searchUsers } from '../../context/github/GithubActions'
import AlertContext from "../../context/alert/AlertContext"

function UserSearch() {
    const { users, dispatch } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)

    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (text === "") {
            setAlert('Please enter something', 'error')
        } else {
            dispatch({ type: 'SET_LOADING' })
            const users = await searchUsers(text)
            dispatch({type: 'GET_USERS', payload: users})
            setText('')
        }
    }

    const handleClearUsers = () => {
        dispatch({ type: 'CLEAR_USERS' })
    }

    return (
        <div className="grid grid-cols-1 xs:gird-cols-2 lg:grid-col-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit} className="form-control">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pr-40 bg-gray-200 input input-lg text-black"
                            value={text}
                            onChange={handleChange}
                        />
                        <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">GO</button>
                    </div>
                </form>
            </div>
            {users.length > 0 &&
                <div>
                    <button
                        className="btn btn-ghost btn-lg"
                        onClick={handleClearUsers}
                    >Clear</button>
                </div>
            }
    </div>
    )
}

export default UserSearch
