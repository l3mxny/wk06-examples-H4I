interface MultipleChoice {
  prompt: string;
  optionCount: number;
  correctAnswer: number;
}

interface FreeResponse {
  prompt: string;
  answer: string;
}

// Below is a BAR not a SLASH
type Question = 
  MultipleChoice 
  | FreeResponse;

const q1: Question = {
  prompt: "2+2=",
  optionCount: 4,
  correctAnswer: 4
}

const q2: Question = {
  prompt:"Your favorite ice cream?",
  answer: "Vanilla"
}

