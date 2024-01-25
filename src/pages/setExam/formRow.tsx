import "./setExamStyle.css";

interface Props {
  count: number;
}

function FormRowAndSelection(props: Props) {
  // const countIncrease = ()=>{return props.count++}

  return (
    <form className="set-exams-page-questions-form" action="#" method="post">
      <div className="set-exams-page-question-with-options">
        <div className="set-exam-page-add-question-botton-container">
          <form
            className="set-exam-page-add-question-button"
            action="#"
            method="post"
          >
            <button
              className="set-exams-page-questions-form-multiple-choice-add-question-button"
              type="submit"
            >
              {" "}
              +{" "}
            </button>
          </form>
        </div>

        <div className="set-exams-page-questions-form-multiple-choice-questions-container">
          <div className="set-exams-page-questions-form-multiple-choice-question-and-number">
            <label
              className="set-exams-page-questions-form-multiple-choice-question-number"
              htmlFor="questionInput"
            >
              {props.count}
            </label>
            <input
              className="set-exams-page-questions-form-multiple-choice-question"
              type="text"
              placeholder="Type question"
            />{" "}
            <br />
          </div>
        </div>

        <div className="set-exams-page-questions-form-multiple-choice-answers-container">
          <label
            className="set-exams-page-questions-form-multiple-choice-answer-label"
            htmlFor="aInput"
          >
            <span className="set-exams-page-answer-value">A.</span>
            <span className="set-exams-page-answer-text">Option 1</span>
          </label>
          <input
            className="set-exams-page-questions-form-multiple-choice-answer"
            type="radio"
            id="aInput"
            value="A"
            name="answer"
          />

          <label
            className="set-exams-page-questions-form-multiple-choice-answer-label"
            htmlFor="bInput"
          >
            <span className="set-exams-page-answer-value">B.</span>
            <span className="set-exams-page-answer-text">Option 2</span>
          </label>
          <input
            className="set-exams-page-questions-form-multiple-choice-answer"
            type="radio"
            id="bInput"
            value="B"
            name="answer"
          />

          <label
            className="set-exams-page-questions-form-multiple-choice-answer-label"
            htmlFor="cInput"
          >
            <span className="set-exams-page-answer-value">C.</span>
            <span className="set-exams-page-answer-text">Option 3</span>
          </label>
          <input
            className="set-exams-page-questions-form-multiple-choice-answer"
            type="radio"
            id="cInput"
            value="C"
            name="answer"
          />

          <label
            className="set-exams-page-questions-form-multiple-choice-answer-label"
            htmlFor="dInput"
          >
            <span className="set-exams-page-answer-value">D.</span>
            <span className="set-exams-page-answer-text">Option 4</span>
          </label>
          <input
            className="set-exams-page-questions-form-multiple-choice-answer"
            type="radio"
            id="dInput"
            value="D"
            name="answer"
          />
        </div>
      </div>
    </form>
  );
}

export default FormRowAndSelection;
