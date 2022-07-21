import user from './jsonData/user.json';
import data from './jsonData/data.json';
import friends from "./jsonData/friends.json";
import transactions from "./jsonData/transactions.json";
import Profile from './components/Profile/Profile.jsx';
import Statistics from './components/Stats/Stats.jsx';
import FriendList from './components/FriendsList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
//
export const App = () => {
  return (
    <div
      style={{
        
    paddingTop: '20px',
        }}
    >
     <Profile
    username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
//test//jikmo