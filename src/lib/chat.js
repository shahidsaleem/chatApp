import { CometChat } from '@cometchat-pro/chat';

export default class ChatManager {
  static cometchat = null;

  static apiKey = '60de9fa2ff3085a533e43f19014747cd86350b3a';
  static appID = '23144aa4c946d18';
  static region = 'eu';

  static init() {
    const appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(this.region)
      .build();
    CometChat.init(this.appID, appSetting).then(
      () => {
        console.log('Initialization completed successfully');
      },
      (error) => {
        console.log('Initialization failed with error:', error);
      }
    );
  }

  static login(UID) {
    return CometChat.login(UID, this.apiKey);
  }

  static logOut() {
    return CometChat.logout();
  }
}
