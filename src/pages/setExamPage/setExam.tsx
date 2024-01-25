import { FormEvent, useState } from "react";
import axios from "axios";
interface Question {
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
}

const QuizForm = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleQuestionChange = (
    index: number,
    field: keyof Question,
    value: string
  ) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      [field]: value,
    };
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: "",
      },
    ]);
  };

  const removeQuestion = (index: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };
  console.log("questions", questions);
  const submitQuestions = async (e: FormEvent) => {
    e.preventDefault();
    // Assemble the questions array here
    console.log("Submitted Questions:", questions);

    const res = await axios.post("http://localhost:3000/lecturers/set-exam", {
      examDuration: "30mins",
      courseCode: "BCH124",
      semester: "first semester",
      session: "2023/2024",
      faculty: "Engineering",
      lecturerId: "2914ade4-3a19-4dcb-9996-75fc3ccfbd7d",
      department: "Engineering",
      examDate: "12/23/2023",
      totalScore: 100,
      questions,
    });
    if (res.status === 200) {
      console.log("Exam created successfully");
    } else {
      console.log("res", res);
    }
  };

  return (
    <form onSubmit={submitQuestions}>
      {questions.map((question, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Question Text"
            value={question.questionText}
            onChange={(e) =>
              handleQuestionChange(index, "questionText", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Option A"
            value={question.optionA}
            onChange={(e) =>
              handleQuestionChange(index, "optionA", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Option B"
            value={question.optionB}
            onChange={(e) =>
              handleQuestionChange(index, "optionB", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Option C"
            value={question.optionC}
            onChange={(e) =>
              handleQuestionChange(index, "optionC", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Option D"
            value={question.optionD}
            onChange={(e) =>
              handleQuestionChange(index, "optionD", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Correct Answer"
            value={question.correctAnswer}
            onChange={(e) =>
              handleQuestionChange(index, "correctAnswer", e.target.value)
            }
          />
          {/* Repeat the above for Option B, Option C, Option D, and Correct Answer */}
          <button type="button" onClick={() => removeQuestion(index)}>
            Remove Question
          </button>
        </div>
      ))}

      {/* Button to add a new question */}
      <button type="button" onClick={addQuestion}>
        Add Question
      </button>

      {/* Button to submit questions to the backend */}
      <button type="submit">Submit Questions</button>
    </form>
  );
};

export default QuizForm;
