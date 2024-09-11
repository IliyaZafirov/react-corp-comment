import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    voteCount: 593,
    badgeLetter: "B",
    companyName: "ByteGrad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit labore repellendus eos perspiciatis eaque.",
    daysAgo: 4,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {/* {feedbackItems.map((feedbackItem) => {
        return <FeedbackItem feedbackItem={feedbackItem} />;
      })} */}

{feedbackItems.map(feedbackItem => 
(<FeedbackItem feedbackItem={feedbackItem} />))}
    </ol>
  );
}
