import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import ChatBox from '../ChatBox/ChatBox';
import { removeUser, hasErrored, addNewMessage, deleteMessages } from '../../actions';
import { endConversation } from '../../apiCalls';
import './App.css';

export class App extends Component {

  signOut = async () => { 
    try {
      await endConversation();
      this.props.removeUser(); // no action is finished and reducer is not finished either for remove user
      this.props.deleteMessages([])
    } catch({ message }) {
      this.props.hasErrored(message);
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <Header signOut={this.signOut} />
        {!user && <WelcomeModal/>}
        {user && <ChatBox />}
      </div>
    );
  }
}

export const mapStateToProps = ({ user }) => ({
  user,
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
     removeUser, 
     hasErrored,
     addNewMessage,
     deleteMessages 
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
