import Profile from './Profile/Profile';

import user from '../user.json';

export const App = () => {
  return (
    <layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </layout>
  );
};
