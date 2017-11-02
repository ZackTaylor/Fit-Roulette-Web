import { connect } from 'react-redux';
import Timer from '../components/Timer';
import { bindActionCreators } from 'redux';

import { togglePause, restartTimer, nextExercise } from '../actions';

function mapStateToProps({ timer }) {
  return { timer };
}

const mapDispatchToProps = dispatch => bindActionCreators({ togglePause, restartTimer, nextExercise }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
