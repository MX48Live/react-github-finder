import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"

function UserSearch() {
    const { users, searchUsers, clearUser } = useContext(GithubContext)
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === "") {
            alert('Please enter something')
        } else {
            searchUsers(text)
            setText('')
        }
    }

    const handleClear = (e) => {
        e.preventDefault()
        clearUser()
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
                        onClick={handleClear}
                    >Clear</button>
                </div>
            }
    </div>
    )
}

export default UserSearch
