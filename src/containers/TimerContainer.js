import { connect } from 'react-redux';
import Timer from '../components/Timer';
import { bindActionCreators } from 'redux';

import { togglePause, restartTimer } from '../actions';

function mapStateToProps(state) {
  return { timer: state.timer };
}

const mapDispatchToProps = dispatch => bindActionCreators({ togglePause, restartTimer }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
