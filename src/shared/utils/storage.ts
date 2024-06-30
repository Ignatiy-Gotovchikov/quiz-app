export const getAnswers = () => {
  const answers = localStorage.getItem('answers');
  return answers ? JSON.parse(answers) : [];
};

export const saveAnswer = (answer: { id: number; title: string; type: string; answer: string | string[] }) => {
  const answers = getAnswers();
  const index = answers.findIndex((a: { id: number }) => a.id === answer.id);
  if (index !== -1) {
    answers[index] = answer;
  } else {
    answers.push(answer);
  }
  localStorage.setItem('answers', JSON.stringify(answers));
};

export const removeAnswerById = (id: number) => {
  const answers = getAnswers();
  const filteredAnswers = answers.filter((a: { id: number }) => a.id !== id);
  localStorage.setItem('answers', JSON.stringify(filteredAnswers));
};

export const clearStorage = () => {
  localStorage.removeItem('answers');
};
