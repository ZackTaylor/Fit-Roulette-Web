import { connect } from 'react-redux';
import Exercise from '../components/Exercise';
import { bindActionCreators } from 'redux';

import { getExercises } from '../actions';

function mapStateToProps({ exercises }) {
  return { exercises };
}

const mapDispatchToProps = dispatch => bindActionCreators({ getExercises }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);
