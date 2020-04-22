import { withRouter } from 'next/router'
import Comp from '../components/comp'
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`

const A = ({ router, name }) => (
  <>
    <Title>this is title</Title>
    <Link href="#aaa"><a className="link">{router.query.id}{name}</a></Link>

    <style jsx>{`
      a {
        color: blue;
      }
      .link {
        color: red;
      }
    `}</style>
    <style jsx global>{`
      a {
        color: blue;
      }
    `}</style>
  </>
)

A.getInitialProps = async (ctx) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
          name: 'wn'
      })
    }, 1000)
  })
  return await promise
}

export default withRouter(A)