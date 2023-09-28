import './TodoSearch.css'

const TodoSearch = ({ searchValue, setSearchValue }) => {

  return (
    <input
      placeholder='Develop software'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}

export { TodoSearch }
