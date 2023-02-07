import './Repositories.scss'
import React, { useState } from 'react'
import RepositoryCard from './RepositoryCard'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [repositories, setRepositories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const githubURL = 'https://api.github.com/users/samson063/repos'

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(githubURL)
      .then((res) => {
        setIsLoading(false)
        setRepositories(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <>
      {isLoading && <p className='loading'>Loading...</p>}
      {!isLoading && (
        <>
          <div className='repo-box'>
            {repositories.map((repo) => {
              return (
                <RepositoryCard
                  name={repo.full_name}
                  visibility={repo.private ? 'Private' : 'Public'}
                  language={repo.language}
                  url={repo.html_url}
                  star_count={repo.stargazers_count}
                />
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

export default App
