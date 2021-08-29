import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {get, isEqual} from 'lodash'
import {
  Login,
  Home,
  Class,
  ClassPrograms,
  Daycare,
  Month,
  OurFocus,
  Staff,
  Week
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
const Routes = () => {
  const userData = useSelector(state => get(state, 'user', {}), isEqual)
  const isLoggedIn = !!userData.id

  const dispatch = useDispatch()

  console.log(isLoggedIn)

  // const titleParts = useSelector(state => get(state, ["formState", "field_title", 'values', 0, 'parts'], []), isEqual);

  useEffect(() => {
    dispatch(me())
  }, [])

  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
      <Route path="/focus" component={OurFocus} />
      <Route path="/classes" component={ClassPrograms} />
      <Route path="/classes/:id" component={Class} />
      <Route path="/daycare" component={Daycare} />
      <Route path="/staff" component={Staff} />
      <Route path="/month" component={Month} />
      {/* Below is for current month event (user change the content every month*/}
      <Route path="/month/:weekId" component={Week} />

      {/* We are not sure if we need this....
        <Route path="/newsletter" component={NewsLetter} /> */}
    </Switch>
  )
}

export default withRouter(Routes)

// /**
//  * COMPONENT
//  */
// class Routes extends Component {
//   componentDidMount() {
//     this.props.loadInitialData()
//   }

//   render() {
//     const {isLoggedIn} = this.props

//     return (
//       <Switch>
//         {/* Routes placed here are available to all visitors */}
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={Signup} />
//         {isLoggedIn && (
//           <Switch>
//             {/* Routes placed here are only available after logging in */}
//             <Route path="/home" component={UserHome} />
//           </Switch>
//         )}
//         {/* Displays our Login component as a fallback */}
//         <Route component={Login} />
//       </Switch>
//     )
//   }
// }

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes))

// /**
//  * PROP TYPES
//  */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
