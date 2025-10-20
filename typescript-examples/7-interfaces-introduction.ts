// Intro example
interface Meeting {
  description: string;
  chapter: string;
  date: string;
  startTime: string;
  endTime: string;
}

const bootcamp: Meeting = {
  description: "Week 6: TypeScript, APIs, React Router",
  chapter: "UMD",
  date: "10-20-2025",
  startTime: "6:00 PM",
  endTime: "7:30 PM"
};

console.log(bootcamp);

// Interfaces being used in other interfaces,,
// optional properties

interface Point {
  x: number;
  y: number;
}

interface Polygon {
  points: Point[];
  color?: string;
}

const triangle: Polygon = {
  points: [{x: 0, y: 0}, { x: 1, y: 0}, {x: 0, y :1}],
  // color: "blue" // OPTIONAL
}

console.log(triangle);

// Extending Interfaces

interface Human {
  firstName: string;
  middleName?: string;
  lastName: string;
}

interface Teacher extends Human {
  subject: string;
}

let teacher: Teacher = {
  firstName: "William",
  middleName: "Sanford",
  lastName: "Nye",
  subject: "Science"
}

console.log(teacher);