import * as Type from "../actions/ActionTypes";

const initialState = {
  signupuser: false,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  userType: "",
  userSignupObject: ""
};

const handleSignupServerResponseSuccess = (state, action) => {
  let newState = {};
  newState = Object.assign({}, state, {
    signupuser: true,
    userSignupObject: action.response,
    firstName: action.UIAction.firstName,
    lastName: action.UIAction.lastName,
    email: action.UIAction.email,
    password: action.UIAction.password,
    userType: action.UIAction.userType
  });
  return {
    ...newState
  };
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Type.SIGNUP_USER:
      return {
        ...state
      };
    case Type.SIGNUP_USER_SERVER_RESPONSE_SUCCESS:
      return handleSignupServerResponseSuccess(state, action);
    case Type.SIGNUP_USER_SERVER_RESPONSE_ERROR:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
};
