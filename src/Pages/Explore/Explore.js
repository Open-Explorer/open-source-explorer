import './Explore.scss'
import React, { useState } from 'react'
import { Navbar } from '../../Components'
import RepositoryCard from './RepositoryCard'
import { useEffect } from 'react'
import axios from 'axios'
import { Gi3DGlasses } from 'react-icons/gi'

const Explore = () => {
  const [repositories, setRepositories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [organization, setOrganization] = useState('facebook')

  const githubURL = `https://api.github.com/orgs/${organization}/repos`

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

  const handleSearch = () => {
    setIsLoading(true)
    axios
      .get(githubURL)
      .then((res) => {
        setIsLoading(false)
        setRepositories(res.data)
      })
      .catch((err) => {
        // alert('no result')
        setIsLoading(false)
        setRepositories([])
        console.log(err.message)
      })
  }

  return (
    <>
      <Navbar />
      {isLoading && <p className='loading'>Loading...</p>}
      {!isLoading && repositories.length < 1 && (
        <p className='loading'>No result found</p>
      )}

      {!isLoading && (
        <>
          <div className='explore'>
            <h1 className='glass'>
              Explore Repositories
              <i>
                <Gi3DGlasses />
              </i>
            </h1>
            <div>
              <input
                className='search'
                placeholder='Search Organisation'
                onChange={(val) => setOrganization(val.target.value)}
              />
              <button className='search-btn' onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
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

export default Explore
