import { withRouter } from 'next/router'
import Comp from '../components/comp'
import Link from 'next/link'

const A = ({ router }) => <Link href="#aaa"><a>{router.query.id}</a></Link>

export default withRouter(A)