// NOTE: If you get an error for the <span></span>,
// run npm install inside examples\typescript-examples

enum Priority {
  Low,    // 0
  Medium, // 1
  High    // 2
}

// Example function using the Priority enum
const getPriorityElement = (priority: Priority) => {
  switch (priority) {
    case Priority.Low:
      return <span>🟢</span>;
    case Priority.Medium:
      return <span>🟡</span>;
    case Priority.High:
      return <span>🔴</span>;
  }
}

