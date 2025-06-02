import React, { useState } from 'react';

const courses = [
  {
    id: 1,
    name: 'Data Science',
    completed: true,
    quiz: [
      {
        question: 'What is the primary purpose of data science?',
        options: ['Data storage', 'Extracting insights', 'Web development', 'Graphic design'],
        answer: 1,
      },
      {
        question: 'Which language is popularly used in data science?',
        options: ['JavaScript', 'Python', 'HTML', 'CSS'],
        answer: 1,
      },
    ],
  },
  {
    id: 2,
    name: 'Digital Marketing',
    completed: false,
    quiz: [
      {
        question: 'What does SEO stand for?',
        options: ['Search Engine Optimization', 'Social Event Organizer', 'Sales & Exchange Office', 'Secure Email Option'],
        answer: 0,
      },
    ],
  },
];

const CertificateSection = () => {
  const [currentCourseId, setCurrentCourseId] = useState(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);

  const startQuiz = (courseId) => {
    setCurrentCourseId(courseId);
    setQuizIndex(0);
    setUserAnswers([]);
    setQuizCompleted(false);
    setQuizPassed(false);
  };

  const course = courses.find(c => c.id === currentCourseId);

  const currentQuestion = course ? course.quiz[quizIndex] : null;

  const handleAnswer = (optionIndex) => {
    setUserAnswers(prev => [...prev, optionIndex]);

    if(quizIndex + 1 < course.quiz.length) {
      setQuizIndex(quizIndex + 1);
    } else {
      // Quiz finished, check answers
      setQuizCompleted(true);
      const correctCount = [...userAnswers, optionIndex].filter((ans, idx) => ans === course.quiz[idx].answer).length;
      // Pass condition: 70% correct
      setQuizPassed(correctCount / course.quiz.length >= 0.7);
    }
  };

  const resetQuiz = () => {
    setCurrentCourseId(null);
    setQuizIndex(0);
    setUserAnswers([]);
    setQuizCompleted(false);
    setQuizPassed(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-yellow-600 text-center mb-8">Certificate Section</h1>

        {!currentCourseId && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your Courses</h2>
            <ul className="space-y-4">
              {courses.map(c => (
                <li key={c.id} className="border border-gray-300 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                  <div>
                    <p className="text-lg font-semibold">{c.name}</p>
                    <p className={`mt-1 text-sm ${c.completed ? 'text-green-600' : 'text-gray-500'}`}>
                      {c.completed ? 'Course Completed' : 'In Progress'}
                    </p>
                  </div>
                  <button
                    disabled={!c.completed}
                    onClick={() => startQuiz(c.id)}
                    className={`px-4 py-2 rounded-md font-semibold focus:outline-none ${
                      c.completed
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-white shadow'
                        : 'bg-gray-300 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {c.completed ? 'Take Quiz' : 'Locked'}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {currentCourseId && !quizCompleted && currentQuestion && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Quiz: {course.name}</h2>
            <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-gray-50">
              <p className="mb-6 text-lg font-semibold">{currentQuestion.question}</p>
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className="w-full text-left px-4 py-3 bg-white border border-gray-300 rounded-md hover:bg-yellow-100 transition-colors duration-150 focus:outline-none"
                  >
                    {option}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">Question {quizIndex + 1} of {course.quiz.length}</p>
            </div>
            <button
              onClick={resetQuiz}
              className="mt-6 inline-block text-gray-600 underline hover:text-yellow-600 transition-colors duration-200"
            >
              Back to Courses
            </button>
          </div>
        )}

        {quizCompleted && (
          <div className="text-center">
            {quizPassed ? (
              <div className="border-4 border-yellow-400 rounded-lg p-8 shadow-lg bg-yellow-50">
                <h2 className="text-3xl font-bold text-yellow-600 mb-4">Certificate of Completion</h2>
                <p className="text-lg mb-2">This certifies that</p>
                <p className="text-2xl font-extrabold text-gray-800 mb-2">Mahirshika Verma</p>
                <p className="text-lg mb-4">has successfully completed the course</p>
                <p className="text-xl font-semibold text-yellow-700 mb-10">{course.name}</p>
                <button
                  onClick={() => window.print()}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-semibold shadow transition-colors duration-200"
                >
                  Download / Print Certificate
                </button>
                <div>
                  <button
                    onClick={resetQuiz}
                    className="mt-6 text-gray-600 underline hover:text-yellow-600"
                  >
                    Back to Courses
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-red-100 border border-red-300 rounded-md">
                <h2 className="text-2xl font-semibold text-red-700 mb-4">Quiz not passed</h2>
                <p className="mb-6">You did not pass the quiz. Please try again to get your certificate.</p>
                <button
                  onClick={() => {
                    setQuizIndex(0);
                    setUserAnswers([]);
                    setQuizCompleted(false);
                    setQuizPassed(false);
                  }}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md shadow font-semibold"
                >
                  Retry Quiz
                </button>
                <div>
                  <button
                    onClick={resetQuiz}
                    className="mt-6 text-gray-600 underline hover:text-yellow-600"
                  >
                    Back to Courses
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateSection;

