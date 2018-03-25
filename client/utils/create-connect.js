import { connect } from "react-redux";
import * as actions from "@actions";

/**
 * 简化mapDispatchToProps
 * 
 * @param {Object} actions 
 * @returns {Function} [mapDispatchToProps];
 */
export const mapDispatchToProps = actions => {
  return dispatch => {
    let result = Object.keys(actions).map(reducer => {
      return [reducer, actions[reducer]];
    }).reduce((prev, reducer) => {
      return Object.assign(prev, { 
        [reducer[0]]: Object.keys(reducer[1]).reduce((handlers, handler) => {
          return Object.assign(handlers, { [handler]: (...args) => {
            dispatch(reducer[1][handler](...args));
          } });
        }, {})
      });
    }, {});
    return result;
  };
};

export default (...args) => {
  const mapState = state => ({ $store: args.reduce((result, reducerName) => { 
    result[reducerName] = state[reducerName];
    return result;
  }, {}) })
  const mapActions = mapDispatchToProps(args.reduce((result, reducerName) => {
    result[reducerName] = actions[reducerName];
    return result;
  }, {}))

  return connect(mapState, mapActions)
} 