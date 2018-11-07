import { withRouter } from 'react-router-dom'
// this also works with react-router-native

const ButtonComp = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/customer') }}
  >
    Click Me!
  </button>
));

export default withRouter(ButtonComp);