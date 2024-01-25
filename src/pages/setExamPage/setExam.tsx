import { FormEvent, useState } from "react";
import axios from "axios";

interface Question {
  type: "regular" | "theory";
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
}

interface Section {
  questions: Question[];
}

const QuizForm = () => {
  const [sections, setSections] = useState<Section[]>([
    { questions: [] },
    { questions: [] },
  ]);

  const handleQuestionChange = (
    sectionIndex: number,
    questionIndex: number,
    field: keyof Question,
    value: string
  ) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].questions[questionIndex] = {
      ...updatedSections[sectionIndex].questions[questionIndex],
      [field]: value,
    };
    setSections(updatedSections);
  };

  const addQuestion = (sectionIndex: number) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].questions.push({
      type: "regular",
      questionText: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
    });
    setSections(updatedSections);
  };

  const addTheoryQuestion = (sectionIndex: number) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].questions.push({
      type: "theory",
      questionText: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
    });
    setSections(updatedSections);
  };

  const removeQuestion = (sectionIndex: number, questionIndex: number) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].questions.splice(questionIndex, 1);
    setSections(updatedSections);
  };

  const submitQuestions = async (e: FormEvent) => {
    e.preventDefault();
    const assembledQuestions = sections.reduce(
      (allQuestions, section) => allQuestions.concat(section.questions),
      [] as Question[]
    );

    console.log("Submitted Questions:", assembledQuestions);

    // Your axios post request here
    try {
      const res = await axios.post("http://localhost:3000/lecturers/set-exam", {
        examDuration: "30mins",
        courseCode: "BCH124",
        semester: "first semester",
        session: "2023/2024",
        faculty: "Engineering",
        lecturerId: "ee375d50-a569-48d4-9d1c-8a7884252665",
        department: "Engineering",
        examDate: "12/23/2023",
        totalScore: 100,
        questions: assembledQuestions,
      });

      if (res.status === 200) {
        console.log("Exam created successfully");
      } else {
        console.log("res", res);
      }
    } catch (error) {
      console.error("Error submitting questions:", error);
    }
  };

  return (
    <form onSubmit={submitQuestions}>
      <div>
        <h2>Regular Questions</h2>
        {sections[0].questions.map((question, questionIndex) => (
          <div key={`regular-${questionIndex}`}>
            <input
              type="text"
              placeholder="Question Text"
              value={question.questionText}
              onChange={(e) =>
                handleQuestionChange(
                  0,
                  questionIndex,
                  "questionText",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Option A"
              value={question.optionA}
              onChange={(e) =>
                handleQuestionChange(
                  0,
                  questionIndex,
                  "optionA",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Option B"
              value={question.optionB}
              onChange={(e) =>
                handleQuestionChange(
                  0,
                  questionIndex,
                  "optionB",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Option C"
              value={question.optionC}
              onChange={(e) =>
                handleQuestionChange(
                  0,
                  questionIndex,
                  "optionC",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Option D"
              value={question.optionD}
              onChange={(e) =>
                handleQuestionChange(
                  0,
                  questionIndex,
                  "optionD",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Correct Answer"
              value={question.correctAnswer}
              onChange={(e) =>
                handleQuestionChange(
                  0,
                  questionIndex,
                  "correctAnswer",
                  e.target.value
                )
              }
            />
            <button
              type="button"
              onClick={() => removeQuestion(0, questionIndex)}
            >
              Remove Question
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addQuestion(0)}>
          Add Question
        </button>
      </div>

      <div>
        <h2>Theory Questions</h2>
        {sections[1].questions.map((question, questionIndex) => (
          <div key={`theory-${questionIndex}`}>
            <input
              type="text"
              placeholder="Question Text"
              value={question.questionText}
              onChange={(e) =>
                handleQuestionChange(
                  1,
                  questionIndex,
                  "questionText",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Option A"
              value={question.optionA}
              onChange={(e) =>
                handleQuestionChange(
                  1,
                  questionIndex,
                  "optionA",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Option B"
              value={question.optionB}
              onChange={(e) =>
                handleQuestionChange(
                  1,
                  questionIndex,
                  "optionB",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Option C"
              value={question.optionC}
              onChange={(e) =>
                handleQuestionChange(
                  1,
                  questionIndex,
                  "optionC",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Option D"
              value={question.optionD}
              onChange={(e) =>
                handleQuestionChange(
                  1,
                  questionIndex,
                  "optionD",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Correct Answer"
              value={question.correctAnswer}
              onChange={(e) =>
                handleQuestionChange(
                  1,
                  questionIndex,
                  "correctAnswer",
                  e.target.value
                )
              }
            />
            <button
              type="button"
              onClick={() => removeQuestion(1, questionIndex)}
            >
              Remove Question
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addTheoryQuestion(1)}>
          Add Theory Question
        </button>
      </div>

      {/* Button to submit questions to the backend */}
      <button type="submit">Submit Questions</button>
    </form>
  );
};

export default QuizForm;
