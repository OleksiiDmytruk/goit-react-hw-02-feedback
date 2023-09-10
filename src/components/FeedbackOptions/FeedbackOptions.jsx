export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, idx) => (
        <button key={idx} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </>
  );
};
