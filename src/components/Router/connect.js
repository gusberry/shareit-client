import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isDrawerOpen: state.isDrawerOpen,
});

export default connect(mapStateToProps);
