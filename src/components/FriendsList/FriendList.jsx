import FriendListItem from "./FriendListItem";
import css from './FriendUl.module.css';

const FriendList = ({friends}) => {
    return <ul className={css['friend-list']}>
        {friends.map(friend => <FriendListItem
         key={friend.id}
         avatar={friend.avatar}
         name={friend.name}
         isOnline={friend.isOnline}
             />)}
     
    </ul>
};

export default FriendList;