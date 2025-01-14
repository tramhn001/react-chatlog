import ChatEntry from './ChatEntry.jsx';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries, onToggleLike = () => {} }) => {
	return (
		<div className="chat-log">
			{entries.map((entry) => (
				<ChatEntry
          key={entry.id}
          id={entry.id} // Pass the id directly
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLikeToggle={onToggleLike} // Pass the function directly
				/>
			))}
		</div>
	);
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired
    })
  ).isRequired,
  onToggleLike: PropTypes.func,
};

export default ChatLog;

