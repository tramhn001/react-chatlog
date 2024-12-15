import ChatEntry from './ChatEntry.jsx';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries, onToggleLike }) => {
	return (
		<div className="chat-log">
			{entries.map((entry) => (
				<ChatEntry
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLikeToggle={() => onToggleLike(entry.id)}
				/>
			))}
		</div>
	);
};

ChatLog.PropTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired
    })
  ).isRequired,
  onToggleLike: PropTypes.func.isRequired,
};

export default ChatLog;

