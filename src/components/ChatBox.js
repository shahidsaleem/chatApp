import React from 'react';
import { Redirect } from 'react-router-dom';
import { CometChatUnified } from './CometChat';
import { Header } from './header';
import chat from '../lib/chat';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: this.props.location.state ? true : false,
    };

    this.logout = this.logout.bind(this);
  }
  logout() {
    chat.logOut().then(
      () => {
        this.setState({
          isAuthenticated: false,
        });
        console.log('logout');
      },
      (error) => {
        console.log('logout error');
      }
    );
  }

  render() {
    const { isAuthenticated } = this.state;
    if (!isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Header logout={this.logout} />
        <CometChatUnified />;
      </div>
    );
  }
}

export default ChatBox;
